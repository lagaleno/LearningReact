//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a react component
const App = () => {
	var text = 'Hi there!';
	return <div> {text} </div>;
};

//Take the react component and show it on the screen

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);