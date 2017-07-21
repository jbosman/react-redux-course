import React from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search-bar';

const API_KEY = 'AIzaSyDgGYqXUfcvqlXXzR6_V8CfyDZpafDgB1I';

YTSearch({ key: API_KEY, term:'surfboards'}, (data) => console.log(data))

require('./index.scss');

export default function(){
	return (
		<div className='app-component'>
			<SearchBar />
		</div>
	)
}