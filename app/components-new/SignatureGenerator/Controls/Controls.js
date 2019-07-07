import React from 'react'
import styled from 'styled-components'
import InputRadio from '../../Common/InputRadio'
import CurrentControls from './CurrentControls'

export default class Controls extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activeControl: 'templates',
		}

		this.handleControlChange = this.handleControlChange.bind(this)
	}

	handleControlChange(e) {
		this.setState({
			activeControl: e.target.value
		})
	}

	render() {
		const { activeControl } = this.state

		const StyledControlsContainer = styled.article`
			grid-area: form;
			display: flex;
			flex-direction: column;
			padding: 2rem 2.5rem 2rem 2rem;
			color: #E8E8E8;
			background-color: #504A65;
			overflow-y: scroll;
			width: 100%;
			max-width: 320px;
			height: 100vh;
			scrollbar-width: none;
			-ms-overflow-style: none;
			&::-webkit-scrollbar {
				width: 0;
				height: 0;
			}
		`

		const StyledControls = styled.div`
			display: flex;
			justify-content: space-between;
			margin-bottom: 2rem;
			& > div {
				position: relative;
				flex: 1;
				text-align: center;
			}
			input[type=radio] {
				position: absolute;
				top: auto;
				overflow: hidden;
				clip: rect(1px 1px 1px 1px);
				clip: rect(1px, 1px, 1px ,1px);
				width: 1px;
				height: 1px;
				white-space: nowrap;
				&:checked + label::before {
					transform: translateY(0);
					opacity: 1;
					transition: transform .1s ease-out;
				}
			}
			label {
				display: block;
				position: relative;
				padding: .5rem;
				transition: background-color .1s ease-in-out;
				user-select: none;
				&:hover {
					cursor: pointer;
					background-color: rgba(232,232,232,.1);
				}
				&::before {
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					transform: translateY(300%);
					width: 100%;
					height: 2px;
					background-color: #E8E8E8;
					opacity: 0;
					transition: opacity .2s ease-out, transform .2s ease-out;
				}
			}
		`

		return(
			<StyledControlsContainer>
				<StyledControls>
					<InputRadio
						label="Templates"
						name="templates"
						checked={ activeControl }
						onChange={ this.handleControlChange }
					/>
					<InputRadio
						label="Info"
						name="info"
						checked={ activeControl }
						onChange={ this.handleControlChange }
					/>
					<InputRadio
						label="Styles"
						name="styles"
						checked={ activeControl }
						onChange={ this.handleControlChange }
					/>
				</StyledControls>

				<CurrentControls current={ this.state.activeControl} />
			</StyledControlsContainer>
		)
	}
}