import React from 'react'
import {Box} from "@mui/material"
import Toolbar from "@mui/material/Toolbar";
import {FormControl, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin.js";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos.js";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled.js";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined.js";

const TopBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                color: "white",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Toolbar sx={{ justifyContent: 'flex-end'}}>
                <FormControl>
                    <IconButton
                        onClick={handleIconClick}
                        aria-controls="menu"
                        aria-haspopup="true"
                        sx={{ color: "white" }}
                    >
                        <PersonPinIcon />
                        <KeyboardArrowDownIcon />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem>Profil</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </FormControl>
            </Toolbar>
        </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '95%',
                height: '50px',
                backgroundColor: '#1E1E1E',
                color: 'white',
                borderRadius: '18px',
                pl: 4,pr :4
            }}>
                <Typography sx={{fontSize : 14,display: "flex", alignItems: "center" ,cursor : "pointer","&:hover": {color:"#6200FC"} }}>
                    <ArrowBackIosIcon sx={{ fontSize: 16 }}/>
                    Back to XYZ
                </Typography>

                <Typography sx={{fontSize : 14,display: "flex", alignItems: "center"}}>
                    Untitled page
                </Typography>

                <Typography sx={{fontSize : 14,display: "flex", alignItems: "center" ,cursor : "pointer" }}>
                    <PlayCircleFilledIcon sx={{ fontSize: 20,mr:3,"&:hover": {color:"#6200FC"} }}/>
                    <CloudDownloadOutlinedIcon sx={{ fontSize: 20,"&:hover": {color:"#6200FC"} }}/>
                </Typography>
            </Box>
        </>
    )
}
export default TopBar
