import React, { useState } from "react";
import "./styles/diff.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function a() {
    const [markers, setMarkers] = useState([]);
    const [markerCount, setMarkerCount] = useState(1);
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();

    const handleImageClick = (event, imageIndex) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (markerCount == 3) {
            toast("תנסי ללחוץ גם על התמונה השנייה!");
        } else if (markerCount == 21) {
            toast("הצלחת למצוא 21 הבדלים, כל הכבוד!");
            setHidden(false);
        } else {
            toast.success("יפה מאוד נועהנ!");
        }

        setMarkers([...markers, { x, y, imageIndex, number: markerCount }]);
        setMarkerCount(markerCount + 1);
    };

    return (
        <>
            <h1 className="diff-h1" style={{ textAlign: "center" }}>
                מצאי את ההבדלים:
            </h1>
            <div className="diff-div">
                <div className="diff-wrapper">
                    <img
                        className="diff-img"
                        onClick={(e) => handleImageClick(e, 1)}
                        src="./assets/1.jpg"
                    />
                    {markers.map((marker, index) => (
                        <div
                            key={index}
                            className={`marker marker-image-${marker.imageIndex}`}
                            style={{ left: marker.x, top: marker.y }}
                        >
                            {marker.number}
                        </div>
                    ))}
                </div>
                <div className="diff-wrapper">
                    <img
                        className="diff-img"
                        onClick={(e) => handleImageClick(e, 2)}
                        src="./assets/2.jpg"
                    />
                    {markers.map((marker, index) => (
                        <div
                            key={index}
                            className={`marker marker-image-${marker.imageIndex}`}
                            style={{ left: marker.x, top: marker.y }}
                        >
                            {marker.number}
                        </div>
                    ))}
                </div>
            </div>
            <button
                style={{ marginRight: 200, marginTop: 20 }}
                hidden={hidden}
                onClick={() => {
                    navigate("/level3");
                }}
            >
                לשלב הבא
            </button>
        </>
    );
}
