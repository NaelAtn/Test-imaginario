import React from 'react'
import img from "../../assets/img.png";
import {Typography} from "@mui/material";

const VideoPlayer = () => {
    return (
        <div style={{ position: 'relative' }}>
            <img src={img} alt="img" width="600px"  style={{ marginLeft: '2%' }} />
            <Typography
                sx={{
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '5px',
                    padding: '8px',
                    width: '85%',
                    top: '85%',
                    left: '52.5%',
                    transform: 'translate(-50%, -50%)',
                    fontSize : 13
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
        </div>
    )
}
export default VideoPlayer
