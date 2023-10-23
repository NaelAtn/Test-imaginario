import React from 'react'
import {Box} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import "./BottomBar.css"
import RangeSlider from 'react-range-slider-input';

const BottomBar = () => {
    return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        height: '60px',
        backgroundColor: '#1E1E1E',
        color: 'white',
        borderRadius: '18px',
        mb:4,
        mt:2,
        pl: 4,pr :4
    }}>
            <AddIcon sx={{ fontSize: 20 ,backgroundColor :"#2A2E31",p:1,borderRadius:"5px",cursor : "pointer","&:hover": { backgroundColor: "#6200FC" } }}/>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="red-bar"
                            style={{
                                position: "absolute",
                                width: "70%",
                                height: "0px",
                                background: "white",
                                marginLeft : "5%",
                                zIndex : 3,
                                display :"flex",
                                alignItems : "center",
                                margin :"auto"
                            }}/>
                        <RangeSlider  id="range-slider"/>
            <AddIcon sx={{ fontSize: 20,backgroundColor :"#2A2E31",p:1,borderRadius:"5px",cursor : "pointer","&:hover": { backgroundColor: "#6200FC" }  }}/>
    </Box>
    )
}
export default BottomBar
