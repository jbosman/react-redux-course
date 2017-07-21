import React, { Component } from 'react';

require('./index.scss');

export default class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = { term: 'search' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event){
		this.setState({ term: event.target.value });
	}

	render(){

		const { term } = this.state;

		return (
			<div className='search-bar'>
				<input 
					value={ term }
					onChange={ this.onInputChange } 
					type="text" placeholder="search" />
			</div>
		);
	}
}
