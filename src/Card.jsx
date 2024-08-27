import './styles/card.css';
import React from 'react';

export default () => (
  <div className='card-body'>
    <div className='birthdayCard'>
      <div className='cardFront'>
        <h3 className='happy'>יומולדת שמח לנועה נחמה!</h3>
        <div className='balloons'>
          <div className='balloonOne' />
          <div className='balloonTwo' />
          <div className='balloonThree' />
          <div className='balloonFour' />
        </div>
      </div>
      <div className='cardInside'>
        <h3 className='back'>מזל טוב נועה נחמה!</h3>
        <p className='card-p'>לנועה נחמה היקרה,</p>
        <p className='card-p'>
          יומולדת שמח!! רציתי לאחל לך את מיטב הברכות ליום המיוחד הזה: אושר,
          עושר, בריאות איתנה, שפע, ישועות ועוד. מי ייתן ותמשיכי להיות מקסימה כמו
          שאת, אשת חיל, ומשו.
        </p>
        <p className='card-name'>נתאי</p>
      </div>
    </div>
  </div>
);
