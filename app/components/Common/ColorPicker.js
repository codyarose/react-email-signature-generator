import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ColorPicker = ({ title, onChange, accentColor }) => {
	const [displayColorPicker, setDisplayColorPicker] = useState(false)
	const handleClick = () => setDisplayColorPicker(!displayColorPicker)
	const handleClose = () => setDisplayColorPicker(false)
	const handleChange = color => onChange(color.hex)

	return (
		<StyledColorPicker>
			{title && <label htmlFor={title}>{title}</label>}
			<Swatch onClick={handleClick}>
				<Color setColor={accentColor} />
			</Swatch>
			{displayColorPicker && (
				<Popover>
					<Cover onClick={handleClose} />
					<ChromePicker color={accentColor} onChange={handleChange} />
				</Popover>
			)}
		</StyledColorPicker>
	)
}

export default ColorPicker

ColorPicker.propTypes = {
	title: PropTypes.string,
	onChange: PropTypes.func,
	accentColor: PropTypes.string,
}

const StyledColorPicker = styled.form`
	position: relative;
`
const Swatch = styled.div`
	width: 100%;
	max-width: 5rem;
	padding: 5px;
	margin-top: 1rem;
	background: #fff;
	border-radius: 1px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
	cursor: pointer;
`
const Color = styled.div`
	width: 100%;
	height: 2rem;
	border-radius: 2px;
	background: ${props => props.setColor};
`
const Popover = styled.div`
	position: absolute;
	top: calc(100% + 0.75rem);
	left: 0;
	padding: 5px;
	background-color: #fff;
	z-index: 2;
	&::before {
		content: '';
		position: absolute;
		top: -0.25rem;
		left: 1rem;
		width: 1rem;
		height: 1rem;
		background-color: #fff;
		transform: rotate(45deg);
		z-index: -1;
	}
`
const Cover = styled.div`
	position: fixed;
	z-index: 2;
`
