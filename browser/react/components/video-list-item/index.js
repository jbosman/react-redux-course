import React from 'react';

require('./index.scss');

export default function VideoListItem(props){

	const { title } = props;

	return (
		<li>{title}</li>
	)
}