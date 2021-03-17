import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };
	
	//com promisse
	/* 
	onSearchSubmit(term) {
		console.log(term); //com o termo no app posso passar para fazer chamadas de API
		//understanding how to make a request
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID R4NVQlUny1iLUmkO_oIzpP8FTEeO64y8G4CxOxDDVt8'
			}
		}).then(response => {
			console.log(response.data.results)
		});
	} */

	//async await
	 onSearchSubmit = async (term) => {
		console.log(term); //com o termo no app posso passar para fazer chamadas de API
		//understanding how to make a request
		const response = await unsplash.get('/search/photos', {
			params: { query: term },

		})

		console.log(response.data.results)
		this.setState({ images: response.data.results });

	}


	render() { 
		return (
			<div> 
				<SearchBar runMeWhenUserSubmit={this.onSearchSubmit}/> 
				Found: {this.state.images.length} images

				<ImageList images={this.state.images}/>
			</div>
		);
	}
}

export default App;
