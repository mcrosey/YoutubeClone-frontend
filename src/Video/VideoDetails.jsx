import React from 'react'

const VideoDetails = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <>
            <div className='iframe-container'>
                <iframe src={videoSrc}
                        title='video Player'
                        className="w-100"
                        height="400"
                ></iframe>
            </div>
            <div className='relatedVideos'>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            </div>
        </>
    )
}

export default VideoDetails;