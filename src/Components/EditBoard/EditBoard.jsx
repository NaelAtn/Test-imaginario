import React from 'react'
import {Box} from "@mui/material"
import Button from '@mui/material/Button';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import EditBoardbtns from "../EditBordBtns/EditBoardbtns.jsx";
import EditBordBtnRight from "../EditBordBtnRight/EditBordBtnRight.jsx";

const EditBoard = ({setShowText,showText,showBackground,setShowBackground}) => {
    const Buttons = [
        {
            text :"Edit",
            isActive : false,
            index :1
        },
        {
            text :"Style",
            isActive : true,
            index : 2
        },
        {
            text :"Summarize",
            isActive : false,
            index : 3
        },
        {
            text :"Post",
            isActive : false,
            index : 4
        }
    ]
    return (
        <div>
            <Box sx={{mb:1}} >
                {Buttons.map((button, index) => (
                    <Button
                        key={index}
                        sx={{
                            color: "white",
                            backgroundColor: button.isActive ? "#6200FC":  "#2A2E31",
                            borderRadius: "12px",
                            fontSize: 10,
                            mr:1,
                            textTransform: 'none',
                            "&:hover": { backgroundColor: "#6200FC" }
                        }}
                    >
                        {button.text}
                    </Button>
                ))}
            </Box>

            {/* Buttons container */}

            <div style={{ backgroundColor: '#1A1C20',borderRadius :"12px",padding:"15px"}}>
                <Box sx={{display : "flex"}} >
                    <Button
                        sx={{
                            color: "white",
                            backgroundColor: "#2A2E31",
                            borderTopLeftRadius: "8px",
                            borderBottomLeftRadius: "8px",
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            fontSize: 10,
                            mr : 0.1,
                            textTransform: 'none',
                            "&:hover": { backgroundColor: "#6200FC" }
                        }}
                    >
                        Montserrat
                        <UnfoldMoreIcon sx={{fontSize :16 , ml:1}} />
                    </Button>
                    <Button
                        sx={{
                            color: "white",
                            backgroundColor: "#2A2E31",
                            borderRadius: 0,
                            fontSize: 11,
                            mr : 0.1,
                            textTransform: 'none',
                            "&:hover": { backgroundColor: "#6200FC" }
                        }}
                    >
                        Black
                        <UnfoldMoreIcon sx={{fontSize :16 , ml:1}} />
                    </Button>
                    <Button
                        sx={{
                            color: "white",
                            backgroundColor: "#2A2E31",
                            borderRadius: 0,
                            fontSize: 11,
                            mr : 0.1,
                            textTransform: 'none',
                            "&:hover": { backgroundColor: "#6200FC" },
                        }}
                    >
                        56
                        <UnfoldMoreIcon sx={{fontSize :16 , ml:1}} />
                    </Button>

                    <Button
                        sx={{
                            color: "#898D91",
                            backgroundColor: "#2A2E31",
                            borderRadius: 0,
                            fontSize: 10,
                            mr : 0.1,
                            textTransform: 'none',
                            "&:hover": { backgroundColor: "#6200FC" },
                        }}
                    >
                        <FormatItalicIcon sx={{fontSize : 14}}/>
                    </Button>
                    <Button
                        sx={{
                            color: "#898D91",
                            backgroundColor: "#2A2E31",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius:0,
                            borderTopRightRadius:  "8px",
                            borderBottomRightRadius:  "8px",
                            fontSize: 10,
                            mr : 0.1,
                            textTransform: 'none',
                            "&:hover": { backgroundColor: "#6200FC" },
                        }}
                    >
                        <FormatUnderlinedIcon sx={{fontSize : 14}}/>
                    </Button>
                </Box>
                {/*Rest of buttons  */}
                <div style={{display : "flex" , flexDirection :"row" , justifyContent : "space-between"}} >
                    <EditBoardbtns setShowText={setShowText} showText={showText} showBackground={showBackground} setShowBackground={setShowBackground} />
                    <EditBordBtnRight/>
                </div>
            </div>
        </div>
    )
}
export default EditBoard
