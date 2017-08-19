import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import keys from '../../../config/keys';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: keys.API_Key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

    return (
      <div className="wrapper">
        <div className="row column-1">
          <div className="column-1-item">
            <SearchBar onSearchTermChange={videoSearch} />
          </div>
        </div>
        <div className="row column-2">
          <div className="column-2-item">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
        <div className="row column-3">
          <div className="column-3-item">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
