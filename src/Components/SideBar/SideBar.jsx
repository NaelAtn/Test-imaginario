import React, {useState} from 'react'
import Drawer from "@mui/material/Drawer";
import logo from "../../assets/logo.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings.js";
import ContactSupportIcon from "@mui/icons-material/ContactSupport.js";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TextsmsIcon from '@mui/icons-material/Textsms';
import InsightsIcon from '@mui/icons-material/Insights';

const drawerWidth = 240;

const SideBar = () => {
    const [isActive,setIsActive] = useState(true)
    return (
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        border: 'none', // Remove the border and white space
                        backgroundColor: "#1E1E1E"
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <img
                    src={logo}
                    alt='imaginario'
                    style={{cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center" , margin :"auto",width:150,marginTop:"5%",marginBottom:"5%"}}
                />
                <List sx={{ color: "white",p:2}}>
                    <ListItem>
                        <ListItemButton sx={{borderRadius : "12px",width:202,height:46 ,"&:hover": {backgroundColor:"#2A2E31"}}} >
                            <ListItemIcon>
                                <PhotoCameraFrontIcon sx={{color:"white"}}/>
                            </ListItemIcon>
                            <ListItemText primary={"Media"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{borderRadius : "12px",width:202,height:46 ,"&:hover": {backgroundColor:"#2A2E31"}}} >
                            <ListItemIcon>
                                <SmartToyIcon sx={{color:"white"}}/>
                            </ListItemIcon>
                            <ListItemText primary={"Transform"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{backgroundColor:isActive && "#2A2E31",borderRadius : "12px",width:202,height:46 ,"&:hover": {backgroundColor:"#2A2E31"}}} >
                            <ListItemIcon>
                                <TextsmsIcon sx={{color:"white"}}/>
                            </ListItemIcon>
                            <ListItemText primary={"Text"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{borderRadius : "12px",width:202,height:46 ,"&:hover": {backgroundColor:"#2A2E31"}}} >
                            <ListItemIcon>
                                <InsightsIcon sx={{color:"white"}}/>
                            </ListItemIcon>
                            <ListItemText primary={"Brand"} />
                        </ListItemButton>
                    </ListItem>

                    {/*Settigns && questions*/}
                    <div style={{bottom :20 , position:"fixed"}}>
                        <ListItem>
                            <ListItemButton sx={{borderRadius : "12px",width:202,height:46 ,"&:hover": {backgroundColor:"#2A2E31"}}} >
                                <ListItemIcon>
                                    <SettingsIcon sx={{color:"white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Settings"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{borderRadius : "12px",width:202,height:46,"&:hover": {backgroundColor:"#2A2E31"}}}>
                                <ListItemIcon>
                                    <ContactSupportIcon sx={{color:"white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Questions"}/>
                            </ListItemButton>
                        </ListItem>
                    </div>
                </List>
            </Drawer>
    )
}
export default SideBar
