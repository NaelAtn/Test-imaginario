import React from 'react'
import Box from '@mui/material/Box';
import SideBar from "../../Components/SideBar/SideBar.jsx";
import UserInterface from "../../Components/UserInterface/UserInterface.jsx";

const DashBoardPage = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar/>
            <UserInterface/>
        </Box>
    )
}
export default DashBoardPage
