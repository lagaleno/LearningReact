import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	/*
	//handleInputChange pode ser um nome possivel
	onInputChange(event) {
		//event is a normal Js object
		//event.target.value -> temo que o usuário entrou

	}

	onInputClick() {
		console.log('input was clicked')
	}
	*/

	onFormSubmit = (event) => {
		event.preventDefault(); //não deixa o compartamento default
		//console.log(this.state.term) //errado! this aqui é undefined, logo
		//está tentando fazer undefined.state.term
		//usamos a arrow function para garantir que o this seja a instancia de searchbar
		//console.log(this.state.term)
		this.props.runMeWhenUserSubmit(this.state.term) //this por ser um class component
	};

	render() {
		return( 
			<div className="ui segment" style={{ marginTop: '10px' }}> 
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image search </label>
						<input type='text' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;