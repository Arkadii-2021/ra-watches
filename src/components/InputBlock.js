import React from "react";
import { useState } from "react";


export default function InputBlock({ name, children }) {
	const [value, setValue] = useState('');
	
	const handleValue = (e) => {
		setValue(() => e.target.value)
	};
	
	return (
		<div className="form__item">
			<label htmlFor={ name } className="text_title__form text">{ children }</label>
			<input id={ name } name={ name } className="text__form text" value={ value } onChange={ handleValue } />
		</div>
	)
}