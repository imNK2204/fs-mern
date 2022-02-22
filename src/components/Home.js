import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate();

    const [postList, setPostList] = useState([])

    const getPost = () => {
        axios.get('/api/getposts').then((res) => {
            const data = res.data.data
            setPostList(data);
            console.log(data);
        })
    }

    const delPost = (pid) => {
        axios.post('/api/deletepost', {"id": pid}).then((res) => {
            console.log(res.data.data)
            getPost();
        })
    }

    useEffect(() => {
        getPost();
    }, [])

  return (
    <div>
        <br/><br/>
        <button onClick={() => navigate('/addpost')}>Add New Post</button>
        <h1>Posts</h1>
        <center>
        <table border="2">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Caption</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {postList.map((item, index) => (
                <tr key={item._id}>
                    <td><img src={item.postimage} style={{ width: "90px", height: "90px", borderRadius: "50%"}} alt="..." /></td>
                    <td>{item.postname}</td>
                    <td>{item.postcaption}</td>
                    <td><button onClick={() => delPost(item._id)}>Delete</button></td>
                </tr>
                ))}
            </tbody>
        </table>
        </center>
    </div>
  )
}

export default Home