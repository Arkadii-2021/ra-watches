import React from "react";
import { useState, useEffect } from "react";

import timeCheck from "./timeCheck";

const dayjs = require('dayjs');


export default function GetTimeList({ id, namezone, timezone, remTimeItem }) {
	const [time, setTime] = useState();
	
	const getTime = () => {
		const djs = dayjs();
		const time = timeCheck([djs.hour() + Math.floor(-djs.utcOffset() / 60) + +timezone.padStart(2, '0'), djs.minute(), djs.second()]);
		setTime(time);
	}
	
	useEffect(() => {
		const timerID = setInterval(() => {getTime()}, 1000)
		// eslint-disable-next-line
		return () => clearInterval(timerID)}, [time])

	return (
	<div className="time__item">
		<div>
			<span className="text_time__item">{namezone}</span>
			<div className="time">{time}</div>
			<div className="on_close" onClick={() => remTimeItem(id)}>&#x2716;</div>
		</div>
	</div>
	);
};