import React from 'react';

require('./index.scss');

export default function VideoListItem({video}){

	const { title, 
			thumbnails: imgURL
	} = video.snippet;

	return (
		<li className='video-list-item'>
			{title}
			<div className='video-img-container'>
				<img className='video-img'  src={imgURL.default.url}/>
			</div>
		</li>
	)
}