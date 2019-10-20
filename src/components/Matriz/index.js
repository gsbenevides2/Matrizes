import React, {Component} from 'react';
import styled from 'styled-components'
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from "react-mdl";

const Tabela = styled.table`
	z-index1;
	position:absolute;
	left:50%;
	transform:translate(-50%);
	border:1px solid black;
	border-collapse:collapse;
	td,th,tr{
		max-width:100%;
		text-align:center;
		border:1px solid black;
		border-collapse:collapse;
	}
	td{
		padding:5px;
	}
`
function renderHtml(linhas,colunas,razao){
	let html = ""
	for(let i = 1; i<=linhas;i++){
		html += "<tr>"
		for(let j = 1;j<= colunas;j++){
			//eslint-disable-next-line
			let calcularElemento = new Function(`
			const i = ${i};const j = ${j};${razao}
			`)
			html += `<td>${calcularElemento()}</td>`
		}
		html += "</tr>"
	}
	return html
}

export default class  Matriz extends Component{
	constructor(props){
		super(props)
		this.abrir = this.abrir.bind(this)
		this.state = {
			html:""
		}
	}
	fechar(){
		window.location.reload()
	}
	abrir(linhas,colunas,razao){
		this.setState({
			html: renderHtml(linhas,colunas,razao)
		})
		document.querySelector("dialog").showModal()
	}
	render(){
		return (
			<Dialog open={false}>
				<DialogTitle> Matriz Gerada</DialogTitle>
				<DialogContent>
					<Tabela dangerouslySetInnerHTML={{ __html: this.state.html}}/>
				</DialogContent>
				<DialogActions>
					<Button raised ripple onClick={this.fechar}>Fechar</Button>
				</DialogActions>
			</Dialog>
		)
	}
}