import React, {useRef, useState} from 'react'
import { Row, Col } from 'antd';
import { Player, ControlBar, ClosedCaptionButton } from 'video-react';


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
                          controls width={"100%"} height="">
                        <source type="video/mp4" src={'http://127.0.0.1:8080/static/workman2.mp4'} />
                        <track
                            crossOrigin="anonymous"
                            kind="subtitles"
                            src="../assets/vtt_pos_test_03.vtt"
                            srcLang="en"
                            label="VTT_POS_3"
                            default
                        />
                        <track
                            crossOrigin="anonymous"
                            kind="subtitles"
                            src="//127.0.0.1:8080/vtt_pos_test_03.vtt"
                            srcLang="en"
                            label="VTT_POS_4"
                            default
                        />
                    </video>
                        
                    <button onClick={handlePlayToggle}>재생하기</button>
                </Col>
                <Col span={6}>
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <track
                            kind="captions"
                            src="../assets/vtt_pos_test_03.vtt"
                            srcLang="en"
                            label="VTT_POS_3"
                            default
                        />
                        <ControlBar autoHide={true}>
                            <ClosedCaptionButton order={7} />
                        </ControlBar>
                    </Player>
                </Col>
            </Row>
            
        </div>
    )
}

export default VideoContainer
