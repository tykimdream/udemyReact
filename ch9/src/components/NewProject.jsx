import React from 'react';
import Input from './Input';

const NewProject = () => {
	return (
		<div className='w-[35rem]'>
			<menu>
				<li>
					<button>Cancel</button>
					<button>Save</button>
				</li>
			</menu>
			<div>
				<Input label='Title' />
				<Input
					label='Description'
					textarea
				/>
				<Input label='Due Date' />
			</div>
		</div>
	);
};

export default NewProject;
