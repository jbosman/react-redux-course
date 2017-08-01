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
			selectedVideo: null
		};

		YTSearch(
			{ key: API_KEY, term:'surfboards'}, 
			videos => {
				let temp = [];
				for( let i = 0; i < 2; i++){
					for(let j = 0; j < videos.length; j++){
						temp.push(videos[j])
					}
				}
				this.setState({ 
					videos: temp, 
					selectedVideo: videos[0]
				})
			}
		);

		this.updateSelectedVideo = this.updateSelectedVideo.bind(this);
	}

	updateSelectedVideo(selectedVideo){
		this.setState({selectedVideo});
	}

	render(){

		const { 
			videos,
			selectedVideo } = this.state;

		return (
			<div className='app-component'>
				<SearchBar />
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
