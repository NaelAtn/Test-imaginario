import React from 'react'
import EditBoard from "../EditBoard/EditBoard.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";

const EditVideo = () => {
    return (
        <div style={{marginTop :"10px" , marginBottom : "10px", display :"flex"}}>
            <EditBoard/>
            <VideoPlayer/>
        </div>
    )
}
export default EditVideo
