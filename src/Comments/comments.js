import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'antd';

const { TextArea } = Input;

function Comments(props) {

    const [Comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("props",props.videoId)
        const dataComment = {
        text: Comment,
        videoId: props.videoId.videoId 
    } 
        axios.post(`http://localhost:5000/api/${props.videoId.videoId}`, dataComment)
        .then(response => {
            if(response) {
                setComment("")
                console.log(response)
            } else {
                console.log('Failed to save comment')
               
            }
        })
    }

    return (
        <>
        <div>
            <br />
            <p>replies</p>
            <br />
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
            <TextArea 
                style={{ width: '55%', borderRadius: '5px' }}
                onChange={handleChange}
                value={Comment}
                placeholder='write some comments'
                />
                <br />
                <Button style={{ width: '10%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>
            </div>
        </>
    )

}


export default Comments;



// import VideoDetails from '../Video/VideoDetails'

// class Comments extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: '',
//             likes: '',
//             dislikes: '',
//             replies: '',
//             videoId: '',
//             date: ''
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({value: e.target.value });
//     }


//     handleSubmit(e) {
//         e.preventDefault();
//         let url = `http://localhost:5000/api/${this.props.video.id.videoId}`;
//         axios.post(url,{
//             text: this.state.text,
//           //  likes: this.state.likes,
//           //  dislikes: this.state.dislikes,
//          //   replies: this.state.replies,
//             videoId: this.state.videoId,
//           //  date: this.state.date
//         })
//         .then(response => {
//             this.forceUpdate();
         
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }
    
    

//     render() {
//         return (
//             <div >
//                 <form onSubmit={this.handleSubmit}>
//                 <label>
//                 Comments:
//                 <input type='text' value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type='submit' value='Submit' />
//             </form>
//             </div>
      
//         );
//     }
// }
