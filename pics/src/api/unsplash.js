import axios from 'axios';

export default axios.create({
	//create instance of axios client
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID R4NVQlUny1iLUmkO_oIzpP8FTEeO64y8G4CxOxDDVt8'
	}
});