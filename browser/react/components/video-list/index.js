import React from 'react';

require('./index.scss');

function renderVideos(listOfVideos){
	return listOfVideos.map( (video) => {

		const { title } = video.snippet;
		return <li key={video.id.videoId} >{ title }</li> 
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