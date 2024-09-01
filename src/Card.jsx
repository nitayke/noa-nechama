import "./styles/card.css";
import React from "react";

export default () => (
    <div className="card-container">
        <div className="card">
            <div className="back"></div>
            <div className="front">
                <div className="imgset">
                    <img
                        width="100%"
                        src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    />
                </div>
            </div>
            <div className="text-container">
                <p id="head">מזל טוב נועה נחמה!</p>
                <p>
                    מי ייתן ותזכי לאושר רב, בריאות, שפע, נחת, שמחה, מנוחה, ועוד
                    המון ברכות.
                </p>
                <p>אמן!</p>
            </div>
        </div>
    </div>
);
