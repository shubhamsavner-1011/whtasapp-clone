import { Avatar, Box, styled, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const Heading = styled(Typography)`
color: #111b21;
margin-left: 20px;
`
export const ChatingHeader = () => {
  return (
    <>
    <Box style={{display:'flex', alignItems:'center'}}>
    <Box>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Box>
    <Box>
    <Heading>Placement Adda</Heading>
    </Box>
    </Box>
    <Box>
    <SearchIcon style={{ color: "#54656f", cursor:'pointer' }}/>
    <MoreVertIcon style={{ color: "#54656f", cursor:'pointer',marginLeft:'40px' }}/>
    </Box>
  </>
  )
}
