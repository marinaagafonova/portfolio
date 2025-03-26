import React from 'react';
import './App.css';
import {
	Contact,
	Footer,
	HardSkills,
	Header,
	Home,
	Portfolio,
	Resume,
	Services,
} from './components';

const App: React.FC = () => {
	return (
		<main className='main'>
			<Header />
			<Home />
			<Services />
			<HardSkills />
			<Portfolio />
			<Resume />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
