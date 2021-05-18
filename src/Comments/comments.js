import React, { Component } from 'react';
import axios from 'axios';
import VideoDetails from '../Video/VideoDetails'

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            likes: '',
            dislikes: '',
            replies: '',
            videoId: '',
            date: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        let url = `http://localhost:5000/api/${this.props.video.id.videoId}`;
        axios.post(url,{
            text: this.state.text,
          //  likes: this.state.likes,
          //  dislikes: this.state.dislikes,
         //   replies: this.state.replies,
            videoId: this.state.videoId,
          //  date: this.state.date
        })
        .then(response => {
            this.forceUpdate();
         
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                <label>
                Comments:
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
            </div>
      
        );
    }
}



export default Comments;