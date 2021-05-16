import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectedVideo}) => {
    const renderList = videos.map(video => {
        return <VideoItem video={video} onSelectedVideo={onSelectedVideo}/>
    })
return (
    <>
        <div>{renderList}</div>
    </>
)
}

export default VideoList;