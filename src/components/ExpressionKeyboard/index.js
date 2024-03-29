import React, {Component} from "react"
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import styled from "styled-components";

const TextArea = styled.div`
	width:100%
`

const defaultValue = `//i = linha, j = coluna
return (2 * i) + j`

export default class ExpressionKeyboard extends Component{
	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this)
		this.val = this.val.bind(this)
		this.value = defaultValue
	}
	onChange(e){
		this.value = e
	}
	val(value){
		if(value){
			this.value = value
		}
		if(!this.value){
			return null
		}
		return this.value
	}
	render(){
		return (
			<TextArea>
				<p>Use o editor abaixo para criar o codigo da funcao em javascript que retornara o valor de cada elemento(lei de formação). Não esqueça do return!!!</p>
				<AceEditor
					width="100%"
					mode="javascript"
					theme="github"
					name="blah2"
					onChange={this.onChange}
					fontSize={14}
					showPrintMargin={true}
					showGutter={true}
					highlightActiveLine={true}
					value={defaultValue}
					setOptions={{
						showLineNumbers: true,
						tabSize: 2,
						useWorker: false
					}}
				/>  
			</TextArea>
		)
	}
}