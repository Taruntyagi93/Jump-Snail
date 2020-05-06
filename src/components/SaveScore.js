import React, { useState, useEffect } from 'react';
import { addCollection } from '../agent';
import img1 from "./MalwareAttack.png";
import img2 from "./ManinMiddleAttack.png";
import img3 from "./DoSAttack.png";
import img4 from "./DNSTunnelingAttack.png";
import img5 from "./PhishingAttack.png";
import img6 from "./SQLInjectionAttack.png";
import img7 from "./ZeroDayAttack.png";
import img8 from "./BackdoorAttack.png";
import img9 from "./KeyLoggerAttack.png";
import './SaveScore.css';

export default function SaveScore({ score, closeHandler }) {
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");

    const arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

    useEffect(() => {

    }, []);

    const saveScore = () => {
        setLoading(true);
        addCollection('scoreboard', {
            score: score,
            username: username
        }).then(() => {
            setSaved(true);
            setLoading(false);
        });
    }

    return (
        <div id="save-score" className="cybersecurity2">
            <h2 className="cybersecurity2" >{score} <small>PTS</small></h2>
            <div className="cybersecurity"><img className="cybersecurity" src={arr[Math.floor(4 * Math.random())]}></img></div>
            {
                saved ? (
                    <div>Saved!</div>
                ) : (
                        <div>
                            <input className="cybersecurity2" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                            <button onClick={saveScore} disabled={loading}>Save Score</button>
                        </div>
                    )
            }
            <div>
                <button onClick={closeHandler}>Play Again</button>
            </div>
        </div>
    );
}