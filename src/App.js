import './App.css';
import React from 'react';
import { useState } from 'react';
import Envelope from './images/envelope/Envelope.png';
import EnvelopeCover from './images/envelope/EnvelopeCover.png';
import './animations/OpenEnvelope.css';
import './animations/SlideLetterOut.css';

function App() {
    const [openEnvelope, isOpenEnvelope] = useState(false);
    const [slideLetterOut, isSlideLetterOut] = useState(false);

    const handleLetterClick = () => {
        isOpenEnvelope(true);
        isSlideLetterOut(true);
    }

    return (
        <div
            style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                display: "flex",
            }}
        >
            <div 
                style={{
                    position: "relative",
                    backgroundColor: "rgb(169, 125, 81)"
                }}
            >
                <div
                    className={openEnvelope ? 'openEnvelope' : ''}
                    style={{
                        position: "absolute",
                        zIndex: 2
                    }}
                >
                    <img src={EnvelopeCover} onClick={handleLetterClick}/>

                </div>
                <div
                    className={slideLetterOut ? 'slideLetterOut' : ''}
                    style={{
                        backgroundColor: "#FFE6EE",
                        width: "100%", 
                        height: "100%",
                        position: "absolute",
                    }}
                >
                </div>
                <div
                    style={{
                        zIndex: slideLetterOut ? 4 : 1,
                        position: "relative"
                    }}
                >
                    <img src={Envelope}/>
                </div>
            </div>
        </div>
    );
}

export default App;
