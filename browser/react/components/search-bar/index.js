import React, { Component } from 'react';

require('./index.scss');

export default class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = { term: 'search' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render(){

		const { term } = this.state;

		return (
			<div className='search-bar'>
				<input 
					value={ term }
					onChange={ event => { this.onInputChange(event.target.value) } } 
					type="text" placeholder="search" />
			</div>
		);
	}
}
