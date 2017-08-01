import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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
			selectedVideo: null
		};

		this.videoSearch('surfboards');

		this.updateSelectedVideo = this.updateSelectedVideo.bind(this);
	}

	videoSearch(term){
		YTSearch(
			{ key: API_KEY, term:term}, 
			videos => {
				this.setState({ 
					videos: videos, 
					selectedVideo: videos[0]
				})
			}
		);
	}

	updateSelectedVideo(selectedVideo){
		this.setState({selectedVideo});
	}

	render(){

		const videoSearch = _.debounce( term => { this.videoSearch(term)}, 300 );

		const { 
			videos,
			selectedVideo } = this.state;

		return (
			<div className='app-component'>
				<SearchBar onSearchTermChange={ videoSearch }/>
				<div className='main-container'>
					<VideoDetail video={ selectedVideo } />
					<VideoList 
						videos={ videos }  
						onVideoSelect={this.updateSelectedVideo} />
					</div>
			</div>
		)
	}
}
