import React from 'react';

export default function ActivityComponent({
    activity,
    handleClickNap,
    handleClickEat,
    handleClickPlay,
    handleClickDrool,
}) {
    return (
        <div>
            <div>{activity}</div>
                <button onClick={handleClickDrool}>Drool</button>
                <button onClick={handleClickEat}>Eat</button>
                <button onClick={handleClickPlay}>Play</button>
                <button onClick={handleClickNap}>Nap</button>
        </div>
    );
}
