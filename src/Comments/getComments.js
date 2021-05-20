import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetComments (props){
  const [CommentLists, setCommentLists] = useState([]);


    
          useEffect(async () => { 

            const result = await axios(`http://localhost:5000/api/${props.videoId.videoId}`)
            setCommentLists(result.data.map((item, index) => {
                return item.text
            }))
            // CommentLists.map((text, index) => {
            //     console.log(text);
            // })
          // console.log(result.data)
          //console.log(props.videoId.videoId)
           // console.log(result.data.text)

  }, [CommentLists])


      return (
        <>
        <div>  
            <div className='container'>
            {CommentLists.map(function(el){
                return <div>{el}</div>
            })}

            </div>
            </div>
        </>
    )





}

export default GetComments;

 // setCommentLists(result.data[0].text)
 // console.log(result.data[1].text)




//  useEffect(async () => {
//     try{ 
//       let result = await axios.get(`http://localhost:5000/api/${props.videoId.videoId}`)
//       let CommentLists = result.data.text.map((e) => e); // map your state here
//       setCommentLists(CommentLists); // and then update the state
//       console.log(CommentLists);
//     } catch(error) {
//        console.error(error.message);
//     }
//   },[]);