import React from 'react';
declare let navigator: any;
class Permissions extends React.Component<{}, {}> {

    //Life Cycle Hooks
    constructor(props: {}) {
        super(props);
        this.state = { num: 0 }
    }
    componentDidMount() {
        this.checkCameraAndMicPermissions();
    }

    //Functions
    checkCameraAndMicPermissions(){
        if (typeof window !== "undefined") {
            navigator.getUserMedia({video: {}}, (stream: any) => {
                const video = document.getElementById('video1') as HTMLVideoElement;
                if(video){
                    video.addEventListener('suspend', (event) => {
                        alert('Please enable camera and mic permissions')
                    });
                    video.srcObject = stream;
                }
            }, (err: any) => {
                console.log(err)
            });
        }
    }


    render() {
        return <div className="video-view flex justify-center">
            <video id="video1" controls={false} autoPlay>
            </video>
        </div>
    }
}

export default Permissions
