import React, { useState, useEffect } from 'react';
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
        console.log('propsAgain', props.videoId.videoId)
        const dataComment = {
        text: Comment,
        videoId: props.videoId.videoId 
    } 
        axios.post(`http://localhost:5000/api/${props.videoId.videoId}`, dataComment)
        .then(response => {
            if(response) {
                setComment("")
              //  props.refreshFunction(response)
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
            <p>Comments</p>
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




