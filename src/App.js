import React, { Component } from 'react';
import Authentication from './components/Authentication';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false
		};

		this.onLoggingIn = this.onLoggingIn.bind(this);
	}

	onLoggingIn(loggedIn) {
		this.setState({
			isLoggedIn: loggedIn
		});
	}

	render() {
		return (
			<div>
				<div hidden={this.state.isLoggedIn}>
					<Authentication onLoggingIn={this.onLoggingIn}/>
				</div>
				<div hidden={!this.state.isLoggedIn}>				
					<Header />
					<MainContent />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
