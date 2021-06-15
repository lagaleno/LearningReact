import React, { useState, useEffect } from 'react';
import './Video.css';



const Video = () => {
    // estado para dizer se o video acabou
    const [notFinished, setFineshed] = useState(true)
    const [start, setStart] = useState(10)
    const [end, setEnd] = useState(start+10)

    useEffect(() => { 
        setStart(Math.floor(Math.random() * 105))
        setEnd(start+10)
    }, [start, end])
    
    //const start =  Math.floor(Math.random() * 105);
    //const end = start + 10;
    const urlYT = 'https://www.youtube.com/embed/oVNjkJmpslI?'
    const options = 'controls=0&rel=0&autoplay=1&mute=1&autohide=0&showinfo=0'
    const url = urlYT + options + '&start=' + start.toString() + '&end=' + end.toString()
    
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
                                src={urlYT + 'controls=0&rel=0&autoplay=1&mute=0&autohide=0&showinfo=0' + '&start=' + start.toString() + '&end=' + end.toString()} title="YouTube video player" frameborder="0" 
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
