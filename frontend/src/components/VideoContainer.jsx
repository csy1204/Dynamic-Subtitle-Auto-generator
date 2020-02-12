import React, {useRef, useState} from 'react'
import { Row, Col } from 'antd';

function VideoContainer() {
    const [play, setPlay] = useState(false);

    const videoEl = useRef(null);

    const handlePlayToggle = () => {
        if (play) {
            setPlay(false);
            videoEl.current.pause()
        } else {
            setPlay(true);
            videoEl.current.play()
        }
    }

    return (
        <div>
            <Row>
                <Col span={12}>
                    <video ref={videoEl} className="video-container video-container-overlay"
                          autoPlay="" loop="" muted="" width={"100%"} height="">
                        <source type="video/mp4" src={'http://127.0.0.1:5000/static/workman2.mp4'}></source>
                    </video>
                        
                    <button onClick={handlePlayToggle}>재생하기</button>
                </Col>
                <Col span={6}>

                </Col>
            </Row>
            
        </div>
    )
}

export default VideoContainer
