const Radio = (props) => (
	<div>
		<input
			type="radio"
			value={props.value}
			id={props.value}
			checked={props.checked}
			onChange={props.onChange}
		/>
		<label htmlFor={props.value}>{props.label}</label>
	</div>
);


const RadioGroup = (props) => (
	<fieldset>
		{props.options.map( option => (
			<Radio
				label={option.label}
				value={option.value}
				name={props.name}
				checked={props.checked}
				onChange={props.onChange}
			/>
		))}
	</fieldset>
);

export default RadioGroup;