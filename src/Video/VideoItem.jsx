import React from 'react';

const VideoItem = ({video, onSelectedVideo}) => {
    return (
        <>
        <div className='outer'>
        <div className='col-md-8 inner' onClick={() => {
            onSelectedVideo(video)}}>
        <div className='row border p-2 inner' style={{cursor:'pointer'}}>
        <div className='col-md-6 inner'>
      
        <img
            height='150px'
            width='280px'
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
        />  
        </div>
        <div className='col-md-15 inner'>
        <p>{video.snippet.title}</p>
        <p>{video.snippet.channelTitle}</p>
        </div>
        </div>
        </div>
        </div>
        </>

    );
};

export default VideoItem;