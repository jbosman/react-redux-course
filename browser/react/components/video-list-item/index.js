import React from 'react';

require('./index.scss');

export default function VideoListItem({video, onVideoSelect}){
	
	const { title } = video.snippet;
	const imgURL = video.snippet.thumbnails.default.url;

	return (
		<li className='video-list-item' onClick={ () => { onVideoSelect(video) }}>
			<div className='video-img-title' >
				{title}
			</div>
			<div className='video-img-container'>
				<img className='video-img'  src={imgURL}/>
			</div>
		</li>
	)
}