import React from 'react';

require('./index.scss');

export default function VideoListItem({video, clickHandler}){
	
	const { title } = video.snippet;
	const imgURL = video.snippet.thumbnails.default.url;

	return (
		<li className='video-list-item' onClick={ () => { clickHandler(video); }}>
			{title}
			<div className='video-img-container'>
				<img className='video-img'  src={imgURL}/>
			</div>
			
		</li>
	)
}