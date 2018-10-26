import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyD0_oJgs6D5K9ZFwPGHyIWTzgYhaV_O9iM';

// Create a new Component. This Component should produce some html.
class App extends Component { // this a class and to render it to dom we need a instance and in JSX instance are created usig <App />
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('trending')
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term
        }, videos => this.setState({
            videos,
            selectedVideo: videos[0]
        }));
    }

    render() {
        const videosearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300)

        return <div>
            <SearchBar onSearchTermChange={videosearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>;
    }
}

// Take this component's generated HTML and put it on the DOM.
ReactDOM.render(<App />, document.getElementById('root'));  
