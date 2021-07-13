import { h } from 'preact';
import { Router } from 'preact-router';

// import Header from './header';
import Grid from './grid';

// Code-splitting is automated for `routes` directory
// import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		{/* <Header /> */}
		<Router>
			<Grid columns={20} rows={20} path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
	</div>
)

export default App;
