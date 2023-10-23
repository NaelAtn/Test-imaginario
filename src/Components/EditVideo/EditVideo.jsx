import React, {useState} from 'react'
import EditBoard from "../EditBoard/EditBoard.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";

const EditVideo = () => {
    const [showText,setShowText] = useState(true)
    const [showBackground,setShowBackground] = useState(true)
    return (
        <div style={{marginTop :"10px" , marginBottom : "10px", display :"flex"}}>
            <EditBoard setShowText={setShowText} showText={showText} showBackground={showBackground} setShowBackground={setShowBackground} />
            <VideoPlayer showText={showText} showBackground={showBackground} />
        </div>
    )
}
export default EditVideo
