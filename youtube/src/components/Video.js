import React, { useState } from 'react';
import './Video.css';



const Video = () => {
    // estado para dizer se o video acabou
    const [notFinished, setFineshed] = useState(true)

    const start =  Math.floor(Math.random() * 105);
    const end = start + 10;
    const videoID = 'ujf3iJoWgrM?'
    const urlYT = 'https://www.youtube.com/embed/'
    const options = 'controls=0&rel=0&autoplay=1&mute=1&autohide=0&showinfo=0'
    const url = urlYT + videoID + options + '&start=' + start.toString() + '&end=' + end.toString()
    
    setTimeout(() => {
        //alert("chamei timeout")
        setFineshed(false);
    }, 10000)
    
    return (
        <div>
            <div className="wrapper">
                <div className="tapume">
                    <div className="frame-container">
                        {notFinished ?
                            <iframe 
                                width="560" 
                                height="315" 
                                src={url} title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                            />
                            : 
                            <iframe 
                                width="560" 
                                height="315" 
                                src={urlYT + videoID + 'controls=0&rel=0&autoplay=1&mute=0&autohide=0&showinfo=0' + '&start=' + start.toString() + '&end=' + end.toString()} title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                            />
                        }       
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Video;
