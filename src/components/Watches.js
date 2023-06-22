import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

import GetTimeList from "./GetTimeList";
import Form from "./Form";


export default function Watches() {
	const [timeList, setTimeList] = useState([
		{
			id: v4(),
			namezone: 'Новосибирск',
			timezone: '7'
		}
	]);
	
	const handleSubmit = (evt) => {
		evt.preventDefault();
				
		let timeItems = {
			id: v4()
		};
		
		for (let [key, value] of new FormData(evt.target).entries()) {
			timeItems = {...timeItems, [key]: value}
		}
		setTimeList(prev => [...prev, timeItems]);
	}
	
	const remTimeItem = (id) => {
		setTimeList(prev => prev.filter(item => item.id !== id))
	}
	
	return (
		<div>
			<Form onSubmit={ handleSubmit }/>
			<div className="world__times">
				{timeList.map(obj => {
				return (
					<GetTimeList key={obj.id} id={obj.id} namezone={obj.namezone} timezone={obj.timezone} remTimeItem={remTimeItem} />
				)
			})}
			</div>
		</div>
	)
}
