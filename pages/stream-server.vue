<template>
  <div class="container">
    <div class="">
      <p>myVideo</p>
     <video id="v1" ref="myVideo" src="" autoplay></video>
    </div>
    <div class="">
      <p>theirVideo</p>
      <video id="v2" ref="theirVideo" src="" autoplay></video>
    </div>

    <el-select v-model="selectedCamera" placeholder="Camera">
      <el-option
        v-for="item in cameras"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <p @click="getCameras">get cameras</p>
    <p>MESSGAE: {{message}}</p>
    <p @click="startSignaling">start</p>
  </div>
</template>

<script>

  export default {

    auth: false,
    data(){
      return {
        videoSignalSocket:null,
        rtcPeerConn:null,
        message:null,
        cameras: [
        ],
        selectedCamera: null,

        configuration : {
          'iceServers': [{
            'url': 'stun:stun1.l.google.com:19302' //'stun:stun.l.google.com:19302'
          }]
        }

      }
    },
    mounted() {
      this.videoSignalSocket = new WebSocket(process.env.ws_url+'/ws/video_call/signal/test1')

      this.videoSignalSocket.onmessage = (e) => {
        const data = JSON.parse(e.data);

        this.message = 'Signal received:' + data.type

        // setup RTC peer connection object
        if (!this.rtcPeerConn) {
          console.log('rtc Peer conn doesnt exists yet');
          this.startSignaling();
        }

        // we are sending some bogus signal on load with type='user_here'. we call below
        // code only for real signal message
        if (data.type !== 'user_here') {
          console.log('data type != user_here');
          let message = JSON.parse(data.message); // parse json from message

          // sdp message means remote party made us an offer
          if (message.sdp) {
            this.rtcPeerConn.setRemoteDescription(
              new RTCSessionDescription(message.sdp),  () => {
                // if we received an offer, we need to answer
                if (this.rtcPeerConn.remoteDescription.type === 'offer') {
                  this.rtcPeerConn.createAnswer(this.sendLocalDesc,()=>{this.logError()});//, this.logError
                }
              }, this.logError());
          } else {
            this.rtcPeerConn.addIceCandidate(new RTCIceCandidate(message.candidate));
          }
        }

      };


    },

    methods: {
      //получаем устройства ввода видео
      async getCameras() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
          console.log("enumerateDevices() not supported.");
          return;
        }
        const devices = await navigator.mediaDevices.enumerateDevices()
        console.log(devices)
        for (let d of devices){
          console.log(d)
          if (d.kind === 'videoinput') {
            let option = {
              value: d.deviceId,
              label: 'videoinput'
            }
            this.cameras.push(option);
          }
        }
      },
      sendLocalDesc(desc) {
        this.rtcPeerConn.setLocalDescription(desc,  () => {
          this.message ='sending local description'
          this.videoSignalSocket.send(JSON.stringify({
            'type': 'SDP',
            'message': JSON.stringify({
              'sdp': this.rtcPeerConn.localDescription
            }),
            'room': 'TEST_ROOM'
          }));
        }, this.logError())
      },
      startSignaling() {
        console.log('startSignaling');
        this.message = 'starting signaling...'
        this.rtcPeerConn = new RTCPeerConnection(this.configuration);

        // send any ice candidates to other peer
        this.rtcPeerConn.onicecandidate =  (evt) => {
          if (evt.candidate) {
            this.videoSignalSocket.send(JSON.stringify({
              'type': 'ice candidate',
              'message': JSON.stringify({
                'candidate': evt.candidate
              }),
              'room': 'TEST_ROOM'
            }));
          }
          console.log('completed that ice candidate...')
        }

        // when we receive an offer, we return our offer
        // let the 'negotiationneeded' event trigger offer generation
        this.rtcPeerConn.onnegotiationneeded = () => {
          console.log( 'on negotiation called')
          console.log( 'this.rtcPeerConn',this.rtcPeerConn)
          this.rtcPeerConn.createOffer(this.sendLocalDesc, this.logError);
        }

        // once remote stream arrives, show it in remote video element
        this.rtcPeerConn.onaddstream =  (evt) => {
          console.log( 'going to add their stream...')
          console.log('evt.stream',evt.stream)
          this.$refs.theirVideo.srcObject = evt.stream;

        }

        // get a local stream, show it in our video tag and add it to be sent
        this.startStream();

      },
      logError() {
        this.message = 'error'

      },
      async startStream() {
        console.log('startStream');
        let constraints = {
          video: {
            width: 250,
            height: 250,
            deviceId: this.selectedCamera // if wrong device id, then it goes with default
          },
          audio: true
        };
        const stream = await  navigator.mediaDevices.getUserMedia(constraints)
          console.log('Stream connected successfully');
          this.$refs.myVideo.srcObject = stream;


          console.log('stream source',stream)
          this.rtcPeerConn.addStream(stream); // this triggers event our peer needs to get our stream

      }


    }
  };
</script>
