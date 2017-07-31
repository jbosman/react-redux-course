import React from 'react';

require('./index.scss');

export default function VideoDetail({video}){

	if(!video) return <div>Loading...</div>

	const { title, description } = video.snippet;
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className='video-detail'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url} />
			</div>
			<div className='details' >
				<div>{ title }</div>
				<div>{ description }</div>
			</div>
		</div>
	)
}