import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function A() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/cake");
        }, 2000);
    }, []);

    return (
        <div style={{ padding: 30, textAlign: "center" }}>
            <h1>יפה מאוד נועהנ! אלופה!</h1>
            <h2>עכשיו תראי עוגה...</h2>
        </div>
    );
}
