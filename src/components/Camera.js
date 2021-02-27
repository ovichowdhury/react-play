import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'


export default function Camera(props) {
    let base64Image = "";
    let streamObject;

    const [time, setTime] = useState(-1);
    const [text, setText] = useState('');


    const onConfirm = (e) => {
        props.onConfirm(base64Image);

    }

    useEffect(() => {
        console.log("In first effect....")
        const constraints = {
            video: true
        };

        const video = document.querySelector('#videoCap');
        const image = document.querySelector('#imageShow');
        const canvas = document.createElement('canvas');
        const capBtn = document.getElementById("capBtn");
        const imageContainer = document.getElementById("imageContainer");

        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            console.log(stream);
            video.srcObject = stream
            streamObject = stream
        }).catch(err => console.log(err));

        capBtn.onclick = video.onclick = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            let imageRaw = canvas.toDataURL('image/png');
            base64Image = imageRaw.split(',')[1];
            image.src = imageRaw;
            imageContainer.style.display = "block";
        };

        return () => {
            console.log("*****In unmount*****")
            streamObject.getTracks().forEach(function (track) {
                track.stop();
            });
        }


    }, []);



    // state update side effect
    useEffect(() => {
        if (time !== -1) {
            console.log("Change in Time....");
            setText((Math.random() * 100).toString());
        }
    }, [time]);

    return (
        <>
            <div className="row text-center">
                <div className="col-sm-6 " style={{ margin: "auto" }} id="videoContainer">
                    <h3 onClick={() => setTime(time + 1)}>{time} - {text}</h3>
                    <video autoPlay width="340px" height="240px" id="videoCap"></video>
                    <br />
                    <button className="btn btn-info" id="capBtn">Capture</button>
                </div>
                <div className="col-sm-6 animated slideInLeft" style={{ display: "none" }} id="imageContainer">
                    <img width="340px" height="240px" src="" style={{ marginBottom: "7px" }} id="imageShow" alt="Please click on video to capture" />
                    <br />
                    <button className="btn btn-success" id="conBtn" onClick={onConfirm} data-dismiss="modal" >Confirm</button>
                </div>


            </div>
        </>
    )
}

Camera.propTypes = {
    onConfirm: PropTypes.func.isRequired
}

// export class Camera extends Component {

//     base64Image = "";
//     streamObject;

//     static propTypes = {
//         onConfirm: PropTypes.func.isRequired
//     }



//     componentDidMount() {
//         const constraints = {
//             video: true
//         };

//         const video = document.querySelector('#videoCap');
//         const image = document.querySelector('#imageShow');
//         const canvas = document.createElement('canvas');
//         const capBtn = document.getElementById("capBtn");
//         const imageContainer = document.getElementById("imageContainer");

//         navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//             console.log(stream);
//             video.srcObject = stream
//             this.streamObject = stream
//         }).catch(err => console.log(err));

//         capBtn.onclick = video.onclick = () => {
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             canvas.getContext('2d').drawImage(video, 0, 0);
//             let imageRaw = canvas.toDataURL('image/png');
//             this.base64Image = imageRaw.split(',')[1];
//             image.src = imageRaw;
//             imageContainer.style.display = "block";
//         };
//     }

//     componentWillUnmount() {
//         console.log("*****In unmount*****")
//         this.streamObject.getTracks().forEach(function (track) {
//             track.stop();
//         });
//     }

//     onConfirm = (e) => {
//         this.streamObject.getTracks().forEach(function (track) {
//             track.stop();
//         });
//         this.props.onConfirm(this.base64Image);

//     }

//     render() {
//         return (
//             <div className="row text-center">
//                 <div className="col-sm-6 " style={{ margin: "auto" }} id="videoContainer">
//                     <video autoPlay width="340px" height="240px" id="videoCap"></video>
//                     <br />
//                     <button className="btn btn-info" id="capBtn">Capture</button>
//                 </div>
//                 <div className="col-sm-6 animated slideInLeft" style={{ display: "none" }} id="imageContainer">
//                     <img width="340px" height="240px" src="" style={{ marginBottom: "7px" }} id="imageShow" alt="Please click on video to capture" />
//                     <br />
//                     <button className="btn btn-success" id="conBtn" onClick={this.onConfirm} data-dismiss="modal" >Confirm</button>
//                 </div>


//             </div>
//         )
//     }
// }

// export default Camera