import React from 'react'




 
function VideoDetails({ video })  {


  if (!video) {
    return <div>Loading...</div>
  }


  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
 
 

  return (
    <>
     <div className='ui container'>
        <div className='col-md-3'>
      <div className="iframe-container">
        <iframe
          src={videoSrc}
          title="video Player"
          className="w-100"
          height="450"
        ></iframe>
      </div>
      <div className="relatedVideos">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
     
        <br />
      </div>
      <div>
      </div>
      </div>
      </div>
    </>
  )
}

export default VideoDetails







// import React from 'react'
// import Comments from '../Comments/comments'



// const VideoDetails = ({ video }) => {
//   if (!video) {
//     return <div>Loading...</div>
//   }

//   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
//   return (
//     <>
//       <div className="iframe-container">
//         <iframe
//           src={videoSrc}
//           title="video Player"
//           className="w-100"
//           height="400"
//         ></iframe>
//       </div>
//       <div className="relatedVideos">
//         <h3>{video.snippet.title}</h3>
//         <p>{video.snippet.description}</p>

//         <form onSubmit={this.props.handleSubmit}>
//           <label>
//             Comments:
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </>
//   )
// }

// export default VideoDetails
