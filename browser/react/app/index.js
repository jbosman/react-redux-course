import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar 	from '../components/search-bar';
import VideoList 	from '../components/video-list';
import VideoDetail 	from '../components/video-detail';

const API_KEY = 'AIzaSyDgGYqXUfcvqlXXzR6_V8CfyDZpafDgB1I';

require('./index.scss');

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			videoDetail: null
		};

		YTSearch({ key: API_KEY, term:'surfboards'}, 
			videos => this.setState({ videos, videoDetail: videos[0]}));

		this.updateVideoDetail = this.updateVideoDetail.bind(this);
	}

	updateVideoDetail(videoDetail){
		this.setState({videoDetail});
	}

	render(){

		const { 
			videos,
			videoDetail } = this.state;

		return (
			<div className='app-component'>
				<SearchBar />
				<VideoDetail 	video={ videoDetail } />
				<VideoList 		videos={ videos }  clickHandler={this.updateVideoDetail} />
			</div>
		)
	}
}
