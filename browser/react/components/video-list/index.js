import React from 'react';

import VideoListItem from '../video-list-item';

require('./index.scss');

function renderVideos(listOfVideos, clickHandler){
	return listOfVideos.map( (video) => {
		return <VideoListItem 
					 
					video={ video } 
					onVideoSelect= { clickHandler }
				/>
	})
}
// key={video.id.videoId}
export default function VideoList({videos, onVideoSelect}){

	return (
		<ul className='video-list'>
			{ videos.length ? renderVideos(videos, onVideoSelect) : 'loading...' }
		</ul>
	)
}