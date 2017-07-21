import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search-bar';
import VideoList from '../components/video-list';

const API_KEY = 'AIzaSyDgGYqXUfcvqlXXzR6_V8CfyDZpafDgB1I';


require('./index.scss');

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: []
		};

		YTSearch({ key: API_KEY, term:'surfboards'}, videos => this.setState({ videos }));
	}

	render(){

		const { videos } = this.state;

		return (
			<div className='app-component'>
				<SearchBar />
				<VideoList videos={ videos } />
			</div>
		)
	}
}