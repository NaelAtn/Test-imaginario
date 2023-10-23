import * as React from 'react';
import Container from '@mui/material/Container';
import {PlayVideo} from "../PlayVideo/PlayVideo.jsx";
import EditVideo from "../EditVideo/EditVideo.jsx";
import TopBar from "../TopBar/TopBar.jsx";
import BottomBar from "../BottomBar/BottomBar.jsx";

export default function UserInterface() {

    return (
        <Container sx={{display : "flex" , flexDirection : "column"  }} >
            <TopBar/>
            <EditVideo/>
            <PlayVideo/>
            <BottomBar/>
        </Container>
    );
}
