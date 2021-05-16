import React, { Component } from 'react';
import Header from '../Header/Header';
import youtube from '../api/youtubeapi';
import VideoList from '../Video/VideoList';
import VideoDetails from '../Video/VideoDetails';

export default class Homepage extends Component {

    state={
        videos: [],
        selectedVideo: ''
    }

    componentDidMount() {
        this.onTermSubmit('goodful');
    }
    onSelectedVideo = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params:{
                q:term,
            },
        });
        this.setState({ videos:res.data.items, selectedVideo: res.data.items[0] });
    };


    onClickSearch = () => {
    console.log('yes');
}

render() {
    return (
    <>
        <div class="wrapper">
        <Header onClickSearch={this.onTermSubmit} />
        </div>
        <div className='ui container'>
        <div className='col-md-4'>
         <VideoDetails video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
        </div>
        </div>
        
    </>
    )
}
}