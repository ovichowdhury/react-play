import React from 'react';

import Camera from './Camera';

class ImageCapture extends React.Component {
    state = {
        showCamera: false
    }
   

    onImageConfirm = (base64Image) => {
        console.log("In image confirm");
        console.log(base64Image);
        this.closeCamera();
    }

    showCamera = () => this.setState({showCamera: true})

    closeCamera = () => this.setState({showCamera: false})

    render() {
        return (
            <div className="container">
              
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cameraModal" onClick={ this.showCamera }>
                    Capture
                </button>


                <div class="modal fade " id="cameraModal" tabindex="-1" role="dialog" aria-labelledby="cameraModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div class="modal-dialog mw-100 w-75" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="cameraModalLabel">Capture Your Image</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={ this.closeCamera }>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {this.state.showCamera ? <Camera onConfirm={this.onImageConfirm}/> : ""}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ImageCapture;