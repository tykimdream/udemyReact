import { useState } from 'react';

import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: []
	});

	const handleStartAddProject = () => {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		})
	}

	const handleAddProject = (projectData) => {
		const projectId = Math.random();
		const newProject = {
			...projectData,
			id: projectId
		}

		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject]
			}
		})
	}

	const handleCancelAddProject = () => {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
			}
		})
	}


	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects} />
			{content}
		</main>
	);
}

export default App;
