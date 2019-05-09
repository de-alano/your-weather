import React from 'react';
import Moment from 'moment';

const renderDayName = (day) => {
    let days = {
        sameDay: "[Today]",
        nextDay: "ddd",
        nextWeek: "ddd",
        lastDay: "ddd",
        lastWeek: "ddd"
    }


    return (
        <p className="daily-weather__day-name">{Moment(day * 1000).calendar(null, days)}</p>
    )
}

export { renderDayName }