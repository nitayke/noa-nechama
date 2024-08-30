import React, { useState, useEffect } from "react";
import "./styles/counter.css";

const birthDate = "2003-08-26T15:31:52";

const calculateTime = (birthDate) => {
    const now = new Date();
    const birth = new Date(birthDate);
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    let hours = now.getHours() - birth.getHours();
    let minutes = now.getMinutes() - birth.getMinutes();
    let seconds = now.getSeconds() - birth.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes -= 1;
    }
    if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }
    if (hours < 0) {
        hours += 24;
        days -= 1;
    }
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months -= 1;
    }
    if (months < 0) {
        months += 12;
        years -= 1;
    }

    return { years, months, days, hours, minutes, seconds };
};

export default function Counter() {
    const [time, setTime] = useState(calculateTime(birthDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(calculateTime(birthDate));
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [birthDate]);

    return (
        <div className="counter-container">
            <div className="counter-inner-container">
                <h1 className="counter-header">
                    כמה זמן* עבר מאז שנועה נחמה נולדה:
                </h1>
                <div className="counter-cards-container">
                    <p className="counter-p-1">{time.years} שנים</p>
                    <p className="counter-p">{time.months} חודשים</p>
                    <p className="counter-p">{time.days} ימים</p>
                    <p className="counter-p">{time.hours} שעות</p>
                    <p className="counter-p">{time.minutes} דקות</p>
                    <p className="counter-p">{time.seconds} שניות</p>
                </div>
            </div>
            <p style={{ marginTop: 40 }}>
                * לועזי. לא הצלחתי לעשות את זה עם עברי...
            </p>
            <p style={{ marginTop: 10 }}>
                ומצטער על הפאשלות בCSS. אני לא מספיק מבין בזה.
            </p>
        </div>
    );
}
