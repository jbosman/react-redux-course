import React from 'react';

import VideoListItem from '../video-list-item';

require('./index.scss');

function renderVideos(listOfVideos){
	return listOfVideos.map( (video) => {
		return <VideoListItem key={video.id.videoId} video={ video } />
	})
}

export default function VideoList(props){

	const { videos } = props;

	return (
		<ul className='video-list'>
			{ videos.length ? renderVideos(videos) : 'loading...' }
		</ul>
	)
}