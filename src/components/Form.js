import InputBlock from "./InputBlock";


export default function Form({ onSubmit }) {
	return (
		<form onSubmit={onSubmit} className="form">
			<InputBlock name="namezone">Название</InputBlock>
			<InputBlock name="timezone">Временная зона</InputBlock>
			<div className="form__item">
			<button className="btn__form">Добавить</button>
			</div>
		</form>
	)
}
