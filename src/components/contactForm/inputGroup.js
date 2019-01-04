const Input = ({ children, type, name, value, onInput }) => (
	<div>
		<label>{ children }</label>
		<input
			type={type}
			name={name}
			value={value}
			onInput={onInput}
		/>
	</div>
);

export default Input;