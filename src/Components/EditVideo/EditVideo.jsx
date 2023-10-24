import React, {useState} from 'react'
import EditBoard from "../EditBoard/EditBoard.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";

const EditVideo = () => {
    const [showText,setShowText] = useState(true)
    const [showBackground,setShowBackground] = useState(true)
    const [selectedColor, setSelectedColor] = useState('#000000');
    return (
        <div style={{marginTop :"10px" , marginBottom : "10px", display :"flex"}}>
            <EditBoard
                setShowText={setShowText}
                showText={showText}
                showBackground={showBackground}
                setShowBackground={setShowBackground}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <VideoPlayer
                showText={showText}
                showBackground={showBackground}
                selectedColor={selectedColor}
            />
        </div>
    )
}
export default EditVideo
