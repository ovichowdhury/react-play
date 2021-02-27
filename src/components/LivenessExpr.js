import React from 'react';
import { Fragment } from 'react';
import io from 'socket.io-client';


export default class Liveness extends React.Component {

    streamObject;

    render() {
        return (
            <Fragment>
                <div id="videoContainer">
                    <video autoPlay width="340px" height="240px" id="videoCap"></video>
                    <br />
                    <button id="capBtn">Capture</button>
                </div>
            </Fragment>
        );
    }

    componentDidMount() {
        const constraints = {
            video: true
        };

        let neutral1 = false;
        let happy1 = false;
        let neutral2 = false;

        const video = document.querySelector('#videoCap');
        const canvas = document.createElement('canvas');
        const capBtn = document.getElementById("capBtn");

        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            console.log(stream);
            video.srcObject = stream
            this.streamObject = stream

            const socket = io('ws://127.0.0.1:5001');

            socket.on('connect', () => {
                console.log("In Connect Socket...")
                const interval = setTimeout(() => {
                    console.log("In timeout....")
                    canvas.width = video.videoWidth * 0.5;
                    canvas.height = video.videoHeight * 0.5;
                    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    let imageRaw = canvas.toDataURL('image/png');
                    const base64Image = imageRaw.split(',')[1];
                    socket.emit('detect_expr', { image: base64Image });
                }, 3000);

                socket.on('detect_expr_res', (d) => {
                    console.log(d);
                    if (d === "neutral") {
                        if (!neutral1) neutral1 = true;
                        if (!neutral2 && happy1) {
                            neutral2 = true;
                            clearInterval(interval);
                            console.log("Liveness Detected.....");
                            alert("Liveness Detected");
                        }
                    }
                    else if (d === "happy"){
                        if (!happy1 && neutral1) happy1 = true;
                    }
                })
            });

        }).catch(err => console.log(err));





    }

    componentWillUnmount() {
        console.log("*****In unmount*****")
        this.streamObject.getTracks().forEach(function (track) {
            track.stop();
        });
    }
}