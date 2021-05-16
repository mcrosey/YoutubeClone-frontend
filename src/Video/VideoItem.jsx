import React from 'react';

const VideoItem = ({video, onSelectedVideo}) => {
    return (
        <>
        <div className='outer'>
        <div className='col-md-12 inner' onClick={() => {
            onSelectedVideo(video)}}>
        <div className='row border p-2 inner' style={{cursor:'pointer'}}>
        <div className='col-md-6 inner'>
      
        <img
            height='60px'
            width='70px'
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
        />  
        </div>
        <div className='col-md-9 inner'>
        <p>{video.snippet.title}</p>
        </div>
        </div>
        </div>
        </div>
        </>

    );
};

export default VideoItem;