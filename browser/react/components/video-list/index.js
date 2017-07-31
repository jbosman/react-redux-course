import React from 'react';

import VideoListItem from '../video-list-item';

require('./index.scss');

function renderVideos(listOfVideos, clickHandler){
	return listOfVideos.map( (video) => {
		return <VideoListItem 
					key={video.id.videoId} 
					video={ video } 
					clickHandler= { clickHandler }
				/>
	})
}

export default function VideoList({videos, clickHandler}){

	return (
		<ul className='video-list'>
			{ videos.length ? renderVideos(videos, clickHandler) : 'loading...' }
		</ul>
	)
}