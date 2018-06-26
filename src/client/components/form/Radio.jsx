import React from 'react'
import classNames from 'classnames'

function LabelRadio(props) {
	const labelClass = classNames({
		'label-radio': true,
		'active': props.defaultChecked,
	})

	return (
		<React.Fragment>
			<label className={labelClass} htmlFor={props.id}>
				{props.labelName}
				<Radio 
					name={props.name} 
					id={props.id} 
					class={props.class} 
					value={props.value} 
					defaultChecked={props.defaultChecked} 
					onChange={props.onChange} />
			</label>
		</React.Fragment>
	)
}

function Radio(props) {
	return <input 
				type="radio" 
				name={props.name}
				id={props.id} 
				className={props.class}
				value={props.value} 
				defaultChecked={props.defaultChecked}
				onChange={props.onChange} />
}

export { Radio, LabelRadio }