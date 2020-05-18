import React from 'react'
// ===================================================================== material-ui
import TextField from '@material-ui/core/TextField'
// =====================================================================
const Wrap = props => (
	<div className={props.className?props.className:''}>
		<TextFields {...props} />
	</div>
)
export default class TextFields extends React.Component{
	static Wrap = Wrap
	
	state={
		value:''
	}
	
	onChange = e => {
		let value = e.target.value
		this.setState({value:value,change:true},()=>{
			this.props.onChange({[this.props.name]:value})
		})
	}
	
	componentDidMount(){
		if(this.props.value){ this.setValue(this.props.value) }
	}
	
	setValue = value => { this.setState({value: value }) }
	
	reset = () => this.setState({ value:'' })
	
	render(){
		const { type, label, auto, size, disabled, p } = this.props
		return (
			<TextField
				value		= { this.state.value }
				disabled	= { disabled }
				label 		= { label }
				size 		= { size }
				className 	= {`${auto?'':'w'}`}
				onChange	= { this.onChange }
				type 		= { type }
				placeholder	= { p ? p : '请输入' + label }
				classes 	= {{
					
				}}
			/>
		)
	}
}
