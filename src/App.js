import React from 'react';
import {Presentation,RightDiv,Love} from './styles.js'
import ExpressionKeyboard from './components/ExpressionKeyboard'
import Matriz from './components/Matriz'
import {Layout ,Header,Content,Grid,Cell,Textfield,Button} from "react-mdl";

export default function App(){
	let linhElement,colElement,razaoElement,matriz,form 
	const [voltar,setVoltar] = React.useState(false)
	function handleSubmit(e){
		e.preventDefault()
		if(linhElement.inputRef.value === "" || colElement.inputRef.value === "" || razaoElement.val() === null){
			const text = `${ linhElement.inputRef.value === ""  ? "Insira o número de linhas.\n": ""}${colElement.inputRef.value === "" ? "Insira o número de colunas.\n": ""} ${razaoElement.val() ? "" : "Insira uma razão"}`
			console.log("text",text)
			alert(text)
		}
		else{
			matriz.abrir(linhElement.inputRef.value, colElement.inputRef.value,razaoElement.val())
			form.style.display = "none";
			setVoltar(true)
		}
	}
	function fechar(){
		matriz.fechar()
		form.style.display = "block";
		setVoltar(false)
	}
	return (
		<Layout>
			<Header style={{display:"block"}} title="Matrizes">
			</Header>
			<Content>
				<form ref={ref=>form=ref} autocomplete="off" onSubmit={handleSubmit}> <Grid>
					<Cell col={12} phone={4} >
						<Presentation> <b>Seja bem-vindo :)</b><br/>Antes de começar preciso que me passe algumas informações.</Presentation>
					</Cell>
					<Cell col={4} phone={4}><Grid style={{padding:0}}>
						<Cell col={12} phone={2}>
							<Textfield ref={(ref)=>{linhElement = ref}} floatingLabel label="Linhas:" pattern="-?[0-9]*(\.[0-9]+)?" error="Insira um número"/>
						</Cell>
						<Cell col={12} phone={2}>
							<Textfield floatingLabel ref={(ref)=>{colElement = ref}} label="Colunas" pattern="-?[0-9]*(\.[0-9]+)?" error="Insira um número"/>
						</Cell>
					</Grid></Cell>
					<Cell col={6} phone={4}>
						<ExpressionKeyboard ref={(ref)=>{razaoElement = ref}} label="Digite a razão da matriz:"/>
					</Cell>
					<Cell col={2} phone={4}>
						<RightDiv>
							<Button colored raised ripple tupe="submit">Enviar</Button>
						</RightDiv>
					</Cell>
					<Cell style={{textAlign:'center'}} col={12}>
						<Love href="https://github.com/gsbenevides2/Matrizes"> Feito com <span role="img" arial-label="love">❤️</span> por Gsbenevides2</Love>
					</Cell>
				</Grid></form>
				<Grid>
					<Cell col={12}>
						<Matriz ref={(ref)=>{matriz=ref}}/>
					</Cell>
					<Cell col={12}>
						<RightDiv>
							{ voltar && <Button onClick={fechar} colored raised ripple>Voltar</Button> }
						</RightDiv>
					</Cell>
				</Grid>
			</Content>
		</Layout>
	)
}