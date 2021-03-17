import React from 'react';

const Spinner = (props) => {
	return (
		<div className='ui active dimmer'>
			<div className='ui big text loader'>{props.message}</div>
		</div>
	);
};

Spinner.defaultProps = {
	//para o caso de não passar uma mensagem
	message: 'Loadig...'
};

export default Spinner;