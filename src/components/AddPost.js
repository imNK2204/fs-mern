import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const AddPost = () => {

    const navigate = useNavigate();

    const post = {
        postimage: "",
        postname: "",
        postcaption: ""
    }

    const addPost = () => {
        axios.post('/api/addpost', post).then((res) => {
            console.log(res.data)
            navigate('/home')
        })
    }

  return (
    <div>
        <h1>Add Post</h1>
        <input type="text" placeholder='Enter image URL' onChange={(e) => (post.postimage = e.target.value)} /><br />
        <input type="text" placeholder='Enter image name' onChange={(e) => (post.postname = e.target.value)} /><br />
        <input type="text" placeholder='Enter image caption' onChange={(e) => (post.postcaption = e.target.value)} /><br /><br />
        <button onClick={addPost}>Add Post</button>
    </div>
  )
}

export default AddPost