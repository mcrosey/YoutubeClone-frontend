import React, { Component } from 'react';
import Header from '../Header/Header';
import youtube from '../api/youtubeapi';
import VideoList from '../Video/VideoList';
import VideoDetails from '../Video/VideoDetails';
import Comments from '../Comments/comments'
import GetComments from '../Comments/getComments'


export default class Homepage extends Component {
    constructor(props) {
        super(props); 

        this.state={
        videos: [],
        selectedVideo: '',
        dataReady : false
   
    }
    }

    componentDidMount() {
        this.onTermSubmit('vegan tacos');
    }


    onSelectedVideo = (video) => {
        this.setState({ selectedVideo: video })
     //  console.log(this.state.selectedVideo.id)
       
    }
    
    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params:{
                q:term,
            },
        });
        this.setState({ videos:res.data.items, selectedVideo: res.data.items[0], dataReady:true });
       // console.log(res);
    };

render() {
    console.log("Rednering happening")
    if(this.state.dataReady){
         return (
    <>
        <div class="wrapper">
        <Header onClickSearch={this.onTermSubmit} />
        </div>
       <div className='ui container'>
        
        <VideoDetails video={this.state.selectedVideo} />
        <GetComments videoId={this.state.selectedVideo.id} />
        <Comments videoId={this.state.selectedVideo.id} />
        <div className='containers'>
         <div className='col-md-4'>
        <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
        </div>
        </div>
        </div>
        
    </>
    )
    }
    else{
        return(<div></div>)
    }
   
}
}
