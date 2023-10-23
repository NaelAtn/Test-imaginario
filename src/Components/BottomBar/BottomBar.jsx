import React from 'react'
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
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
        mt:2,
        pl: 4,pr :4
    }}>
            <AddIcon sx={{ fontSize: 20 ,backgroundColor :"#2A2E31",p:1,borderRadius:"5px",cursor : "pointer","&:hover": { backgroundColor: "#6200FC" } }}/>

            <AddIcon sx={{ fontSize: 20,backgroundColor :"#2A2E31",p:1,borderRadius:"5px",cursor : "pointer","&:hover": { backgroundColor: "#6200FC" }  }}/>
    </Box>
    )
}
export default BottomBar
