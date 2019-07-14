import React from 'react'
import PropTypes from 'prop-types'

const InputRadio = ({ name, checked, onChange, label }) => (
	<div className="radio">
		<input
			type="radio"
			name={name}
			value={name}
			checked={checked === name}
			onChange={onChange}
			id={name}
		/>
		<label htmlFor={name}>{label}</label>
	</div>
)

export default InputRadio

InputRadio.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
}
