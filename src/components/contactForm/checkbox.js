const Checkbox = ({ name, onInput }) => (
	<fieldset>
		<div>
			<input type="checkbox" id="checkbox_interest" name={name} onInput={onInput} />
			<label>I am interested in receiving articles and insights from Concrezan.</label>
		</div>
	</fieldset>
);

export default Checkbox;