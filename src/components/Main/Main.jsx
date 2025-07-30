import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { Link } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";

const Main = () => {

const { 
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
    } = useContext(Context)

    const { user } = useUser();
  return (
    
    <div className="main">
      <div className="nav">
        <p onClick={()=>newChat()}>ByteBuddy</p>
        <Link to="/dashboard">
            <img src={user.imageUrl}></img>
        </Link>
      </div>

      <div className="main-container">
        
       {
       !showResult
       ?<>
        <div className="greet">
            <p><span>Hello there!</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div onClick={()=> setInput("suggest beautiful places to see on an upcoming road trip")}  className="card">
                <p>suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} />
            </div>
            <div onClick={()=>setInput("Briefly summarize this concept: urban planning")} className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} />
            </div>
            <div  onClick={()=>setInput("Brainstorm team bonding activities for our work retreat")} className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} />
            </div>
            <div onClick={()=>setInput("Improve the readability of our code")} className="card">
                <p>Improve the readability of our code</p>
                <img src={assets.code_icon} />
            </div>
        </div>
       </>
       :  <div className="result">
        <div className="result-title">
            <img src={user.imageUrl} />
            <p> {recentPrompt} </p>
        </div>
        <div className="result-data">
            <img src={assets.robot} />
            {
                loading
                ?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
                : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
        </div>

       </div>

       }

        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)}  value={input} type="text" placeholder="Enter a prompt here" onKeyDown={(e)=>{if(e.key==='Enter'){onSent();}}} />
                <div>
                    {/* <img src={assets.gallery_icon} alt="" /> */}
                    {/* <img src={assets.mic_icon} alt="" /> */}
                   {input ? <img  onClick={() => onSent()} src={assets.send_icon} alt="" /> :null}
                </div>
                
            </div>
            <p className="bottom-info">
            ByteBuddy may display inaccurate info, including about people, so double-check its responses. 
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
