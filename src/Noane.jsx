import React, { useState } from 'react';
import './styles/noane.css';

export default function Noane() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className='birthday-container'>
      <h1 className='birthday-title'>מי חוגגת היום יומולדת?</h1>
      <input
        className='birthday-input'
        onChange={e => setName(e.target.value)}
        value={name}
      ></input>
      <button
        className='birthday-button'
        onClick={() => {
          switch (name) {
            case 'נועה':
              setMessage('נועה מה?');
              break;
            case 'נועהנ':
              setMessage('כיוון טוב אבל הכוונה היא לשם המלא של ילדת היומולדת.');
              break;
            case 'נועה סעד':
              setMessage('שכחת שאנחנו נשואים? ומה עם שאר השמות שלך?');
              break;
            case 'נועה נחמה':
              setMessage('זהו? יש לילדת היומולדת רק שני שמות?');
              break;
            case 'נועה נחמה סעד':
              setMessage('נועה נחמה, שכחת שאנחנו נשואים?');
              break;
            case 'נועה נחמה קסנר':
              setMessage('נועהנ, שכחת שירשת ממני עוד שם?');
              break;
            case 'נועה נחמה אריה קסנר':
              setMessage('כל הכבוד לך! נועה נחמה משו אריה קסנר');
              break;
            default:
              setMessage('תשובה שגויה. נסי שנית.');
              break;
          }
          setTimeout(() => {
            setMessage('');
          }, 1500);
        }}
      >
        אישור
      </button>
      <span className='birthday-message'>{message}</span>
    </div>
  );
}
