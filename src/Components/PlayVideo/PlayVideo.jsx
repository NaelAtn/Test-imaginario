import React from 'react'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import {Box} from "@mui/material"
import {Typography} from "@mui/material";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';

export const PlayVideo = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '5px',
            width: '95%',
            height: '50px',
            backgroundColor: '#1E1E1E',
            color: 'white',
            borderRadius: '18px',
            pl: 4,pr :4
        }}>
            <Button sx={{color : "white",width:"100px" ,height :"30px" ,backgroundColor:"#FF4863",borderRadius:"12px",fontSize : 12,textTransform: 'none'}} >Save Edit</Button>
            <Typography sx={{fontSize : 14,display: "flex", alignItems: "center"}}>
                <Box sx={{mr:4,display: "flex", alignItems: "center"}} >
                    <TurnLeftIcon  sx={{fontSize : 20,cursor : "pointer"  , ml: 1,"&:hover": {color:"#6200FC"} }} />
                    <PlayArrowIcon sx={{fontSize : 20,cursor : "pointer"  , ml: 1,"&:hover": {color:"#6200FC"} }} />
                    <TurnRightIcon  sx={{fontSize : 20,cursor : "pointer" , ml: 1,"&:hover": {color:"#6200FC"} }} />
                </Box>
                00:15:30 / 00:17:00
            </Typography>

            <Typography sx={{fontSize : 14,display: "flex", alignItems: "center" }}>
                <Box sx={{mr:4,display: "flex", alignItems: "center"}} >
                    <AddCircleIcon sx={{fontSize : 20,mr:1,cursor : "pointer","&:hover": {color:"#6200FC"}}} />
                    <Button sx={{border: '1px solid #D2D3D6',
                        color : "white",width:"70px" ,height :"30px" ,
                        backgroundColor:"#1E1E1E",borderRadius:"12px",fontSize : 12,
                        textTransform: 'none',
                        cursor : "pointer"}} >
                        Fill
                    </Button>
                    <RemoveCircleIcon sx={{fontSize : 20 , ml: 1,cursor : "pointer","&:hover": {color:"#6200FC"}}} />
                </Box>
                <OpenInFullIcon sx={{ fontSize: 20,cursor : "pointer","&:hover": {color:"#6200FC"} }}/>
            </Typography>
        </Box>

    )
}
