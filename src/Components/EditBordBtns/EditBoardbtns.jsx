import React, {useState} from 'react'
import {Typography} from "@mui/material";
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded'
import {Box} from "@mui/material"
import ColorizeRoundedIcon from '@mui/icons-material/ColorizeRounded';
import "./EditBoardBtns.css"
import { SketchPicker } from 'react-color';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#6200FC',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));
const EditBoardbtns = ({setShowText,showText,showBackground,setShowBackground,selectedColor, setSelectedColor}) => {
    const handleShowText = () =>{
        setShowText(!showText)
    }
    const handleShowBackground = () =>{
        setShowBackground(!showBackground)
    }

    const [openSkethc,setOpenSkethc] = useState(false)

    const handleColorChange = (color) => {
        setSelectedColor(color.hex);
    };

    const [fontStroke, setFontStroke] = useState(50)
    const handleFontStrokeChange = (e) => {
        setFontStroke(e.target.value);
    };

    return (
        <>
        {/*Left block buttons starts*/}
        <div style={{display : "flex" , flexDirection : "column"}} >
            {/*First block starts*/}
            <div>
            <div style={{ display: 'flex',width : "145px" ,justifyContent :"space-between", marginTop: "5%"  }}>
                <Typography sx={{ fontSize: 11, color: 'white'}}>
                    Font Color
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={handleShowBackground} />
                </Stack>
            </div>

                <Box sx={{ backgroundColor: '#2A2E31', display: "flex",p:0.2,borderRadius :"6px",width : "145px",marginTop : "2%",alignItems :" center" }}>
                    <SquareRoundedIcon sx={{color : selectedColor,cursor : "pointer"}} onClick={()=>setOpenSkethc(!openSkethc)} />
                    {
                        openSkethc ?
                            <div style={{position :"absolute",zIndex:4,marginLeft:"10%"}} >
                                <SketchPicker color={selectedColor} onChange={handleColorChange} />
                            </div> :
                            null
                    }
                    <ColorizeRoundedIcon sx={{color : "white",ml:0.5,fontSize:14 ,backgroundColor :"#1A1C20",p:0.4,borderRadius:"3px"}}/>
                    <Typography sx={{color : "#5E6A85",fontSize:14 ,ml:2,backgroundColor :"#1A1C20",pl:2,pr:1.5,borderRadius:"3px"}} >
                        {selectedColor}
                    </Typography>
                </Box>
            </div>
            {/*First block ends*/}

            {/*Second block starts*/}
        <div>
            <div style={{ display: 'flex',width : "145px" ,justifyContent :"space-between", marginTop: "5%"  }}>
                <Typography sx={{ fontSize: 11, color: 'white'}}>
                    Font Stroke
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center"  >
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={handleShowText} />
                </Stack>
            </div>

            <Box sx={{ backgroundColor: '#2A2E31',p:0.2,borderRadius :"6px",width : "145px",marginTop : "2%",alignItems :" center" }}>
                <div style={{display:"flex"}}>
                    <SquareRoundedIcon sx={{color : "black"}}/>
                    <ColorizeRoundedIcon sx={{color : "white",ml:0.5,fontSize:14 ,backgroundColor :"#1A1C20",p:0.4,borderRadius:"3px"}}/>
                    <Typography sx={{color : "white",fontSize:12 ,ml:2,backgroundColor :"#1A1C20",pl:2,pr:1.5,borderRadius:"3px"}} >
                        <span style={{color :"#5E6A85"}} >#</span> 00000
                    </Typography>
                </div>
                {/* Slideerrr*/}
                <Box sx={{display : "flex" , alignItems:"center"}}>
                    <Typography sx={{color : "white",fontSize:8 }} >
                        Font Stroke
                    </Typography>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={fontStroke}
                        onChange={handleFontStrokeChange}
                        className="slider"
                        style={{
                            width: "60%",
                            height: "2px",
                            background: "white",
                            marginLeft : "5%"
                        }}
                    />
                </Box>
            </Box>
        </div>
            {/*Second block ends*/}

            {/*Third block starts*/}
            <div>
                <div style={{ display: 'flex',width : "145px" ,justifyContent :"space-between", marginTop: "5%"  }}>
                    <Typography sx={{ fontSize: 11, color: 'white'}}>
                        Animated
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </Stack>
                </div>

                <Box sx={{ backgroundColor: '#2A2E31', display: "flex",p:0.2,borderRadius :"6px",width : "145px",marginTop : "2%",alignItems :" center" }}>
                    <SquareRoundedIcon sx={{color : "#FFB140"}}/>
                    <ColorizeRoundedIcon sx={{color : "white",ml:0.5,fontSize:14 ,backgroundColor :"#1A1C20",p:0.4,borderRadius:"3px"}}/>
                    <Typography sx={{color : "white",fontSize:12 ,ml:2,backgroundColor :"#1A1C20",pl:2,pr:1.5,borderRadius:"3px"}} >
                        <span style={{color :"#5E6A85"}} >#</span> 00000
                    </Typography>

                </Box>

                <Box sx={{ backgroundColor: '#2A2E31', display: "flex",p:0.2,borderRadius :"6px",width : "145px",marginTop : "2%",alignItems :" center" }}>
                    <SquareRoundedIcon sx={{color : "#6200FC"}}/>
                    <ColorizeRoundedIcon sx={{color : "white",ml:0.5,fontSize:14 ,backgroundColor :"#1A1C20",p:0.4,borderRadius:"3px"}}/>
                    <Typography sx={{color : "white",fontSize:12 ,ml:2,backgroundColor :"#1A1C20",pl:2,pr:1.5,borderRadius:"3px"}} >
                        <span style={{color :"#5E6A85"}} >#</span> 00000
                    </Typography>

                </Box>
            </div>
            {/*Third block ends*/}
        </div>
        </>
)}
export default EditBoardbtns
