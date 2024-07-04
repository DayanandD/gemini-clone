import React, { useContext, useEffect } from 'react';
import './main.css';
import { assets } from '../../assets/assets'; // Ensure this import is correct
import { Context } from '../../Context/Context';
import ThemeButton from '../ThemeButton/ThemeButton';

function Main() {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    useEffect(() => {
        console.log("recentPrompt:", recentPrompt);
        console.log("resultData:", resultData);
        console.log("showResult:", showResult);
    }, [recentPrompt, resultData, showResult]);

    return (
        <div className="main-container">
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt='User Icon' />
               
            </div>

            <div className='main'>
                {!showResult ? (
                    <>
                        <div className='greet'>
                            <p>Hi, <span>Dayanand</span>!</p>
                            <p>How can I help you...!</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt='Compass Icon' />
                            </div>
                            <div className='card'>
                                <p>Write a beginner’s guide to kitesurfing, including an overview of what is needed to get started.</p>
                                <img src={assets.bulb_icon} alt='Bulb Icon' />
                            </div>
                            <div className='card'>
                                <p>Can you find me some hotels in the Recoleta area of Buenos Aires and suggest things to see while there?</p>
                                <img src={assets.message_icon} alt='Message Icon' />
                            </div>
                            <div className='card'>
                                <p>How can I list all processes that have been running longer than an hour in linux?</p>
                                <img src={assets.code_icon} alt='Code Icon' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt='User Icon' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt='Gemini Icon' />
                            {loading?
                            <div className='loader'>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                {/* <div className='loader-inner'>
                                </div> */}
                            </div>
                            :<></>
                            }
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        </div>
                    </div>
                )}
            </div>

            <div className='main-bottom'>
                <div className='search-box'>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type='text'
                        value={input}
                        placeholder='Enter prompt here'
                    />
                    <div>
                        <img src={assets.gallery_icon} alt='Gallery Icon' />
                        <img src={assets.mic_icon} alt='Mic Icon' />
                        <img onClick={() => onSent(input)} src={assets.send_icon} alt='Send Icon' />
                    </div>
                </div>
                <p className='bottom-info'>How can I list all processes that have been running longer than an hour in linux?</p>
            </div>
        </div>
    );
}

export default Main;
