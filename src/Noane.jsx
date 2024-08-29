import React, { useState } from "react";
import "./styles/noane.css";
import { useNavigate } from "react-router-dom";

export default function Noane() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    return (
        <form
            className="birthday-container"
            onSubmit={(e) => {
                e.preventDefault();
                switch (name) {
                    case "נועה":
                        setMessage("נועה מה?");
                        break;
                    case "נועהנ":
                        setMessage(
                            "כיוון טוב אבל הכוונה היא לשם המלא של ילדת היומולדת."
                        );
                        break;
                    case "נועה סעד":
                        setMessage("שכחת שאנחנו נשואים? ומה עם שאר השמות שלך?");
                        break;
                    case "נועה נחמה":
                        setMessage("זהו? יש לילדת היומולדת רק שני שמות?");
                        break;
                    case "נועה נחמה סעד":
                        setMessage("נועה נחמה, שכחת שאנחנו נשואים?");
                        break;
                    case "נועה נחמה קסנר":
                        setMessage("נועהנ, שכחת שירשת ממני עוד שם?");
                        break;
                    case "נועה נחמה אריה קסנר":
                        setMessage("כל הכבוד לך! נועה נחמה משו אריה קסנר");
                        navigate("");
                        break;
                    default:
                        setMessage("תשובה שגויה. נסי שנית.");
                        break;
                }
                setTimeout(() => {
                    setMessage("");
                }, 1500);
            }}
        >
            <h1>מי חוגגת היום יומולדת?</h1>
            <input
                className="birthday-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            ></input>
            <button type="submit" className="birthday-button">
                אישור
            </button>
            <span className="birthday-message">{message}</span>
        </form>
    );
}
