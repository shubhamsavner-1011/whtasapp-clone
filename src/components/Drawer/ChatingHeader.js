import { Avatar, Box, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Cookies from 'js-cookie';
import { userChats } from '../../api/chatRequest';

const Heading = styled(Typography)`
color: #111b21;
margin-left: 20px;
`
const id = Cookies.get('id')
export const ChatingHeader = ({user}) => {
  console.log(id, 'USERID.......................', user?._id)
  useEffect(()=> {
      const getChats = async() => {
        try{
          const data = await userChats(id)
          console.log(data, 'chat')
        }
        catch(error){
          console.log(error)
        }
      } 
      getChats()
  }, [])
  return (
    <>
    <Box style={{display:'flex', alignItems:'center'}}>
    <Box>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Box>
    <Box>
    <Heading>{user && user?.username}</Heading>
    </Box>
    </Box>
    <Box>
    <SearchIcon style={{ color: "#54656f", cursor:'pointer' }}/>
    <MoreVertIcon style={{ color: "#54656f", cursor:'pointer',marginLeft:'40px' }}/>
    </Box>
  </>
  )
}
