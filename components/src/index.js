import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					authorImg={faker.image.image()} 
					author="Sam" 
					timeAgo="Today at 4:45PM" 
					commentText="Nice!"  
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					authorImg={faker.image.image()} 
					author="Alex" timeAgo="Today at 2:00AM" 
					commentText="Good" 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					authorImg={faker.image.image()} 
					author="Jane" 
					timeAgo="Yerterday at 5:00PM" 
					commentText="Meh" 
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'))
