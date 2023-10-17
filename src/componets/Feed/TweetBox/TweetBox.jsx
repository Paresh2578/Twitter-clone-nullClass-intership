import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import axios from "axios";
import { auth } from "../../../context/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import useLoggedInUser from "../../../hooks/useLoggedInUser";


//URL
import { URL } from "../../../util/URL";

function TweetBox() {
    const [loggedInUser] = useLoggedInUser();
    // console.log(loggedInUser.userName);
    const [isLoading , setIsLoading] = useState(false);
    const [ user ] = useAuthState(auth);
    const email = user?.email;
    const uName = loggedInUser?.userName;
    const LogeedName = loggedInUser?.name;
    const [TweetPostData , setTweetPostData] = useState({  profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",post:"",  photo: "", name : "" , username : "" ,  email:email});


    const handleUploadImage = async(e) => {
        setIsLoading(true);
        const image = e.target.files[0];

        const formData = new FormData();
        formData.set('image', image)

        axios.post("https://api.imgbb.com/1/upload?key=c1e87660595242c0175f82bb850d3e15", formData)
            .then(res => {
                setTweetPostData({...TweetPostData , photo :   res.data.data.display_url});
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })

    }
    
    const handleTweet = async(e) => {
        e.preventDefault();
        
            let result = await fetch(`${URL}/post/post`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ ...TweetPostData ,  name : LogeedName, username :uName}),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

            setTweetPostData({...TweetPostData , post : "" , photo : ""});
        }

        

    return (
        <>
          <div className="tweetBox">
        <form onSubmit={handleTweet}>
            <div className="tweetBox__input">
                <Avatar src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
                <input
                    type="text"
                    placeholder="What's happening?"
                    onChange={(e) => setTweetPostData({...TweetPostData , post : e.target.value})}
                    value={TweetPostData.post}
                    required
                />

            </div>
            <div className="imageIcon_tweetButton">
                <label htmlFor='image' className="imageIcon">
                    {
                        isLoading ? <p>Uploading Image</p> : <p>{TweetPostData.photo ? 'Image Uploaded' : <AddPhotoAlternateOutlinedIcon />}</p>
                    }
                </label>
                <input
                    type="file"
                    id='image'
                    className="imageInput"
                    onChange={handleUploadImage}
                />
                <Button className="tweetBox__tweetButton" type="submit">Tweet</Button>
            </div>
        </form>

    </div>
        </>
    )
}
export default TweetBox;