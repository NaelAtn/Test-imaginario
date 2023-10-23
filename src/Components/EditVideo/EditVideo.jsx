import React from 'react'
import Box from "@mui/material/Box";
import EditBoard from "../EditBoard/EditBoard.jsx";
import Container from "@mui/material/Container";
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
