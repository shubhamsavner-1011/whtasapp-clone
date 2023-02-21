import { Avatar, Box } from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ImgPath } from "../../constant/Images";
export const Header = () => {
  return (
    <>
      <Box>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{cursor:'pointer'}}/>
      </Box>
      <Box>
        <img src={ImgPath.COMMUNITY} alt="community" style={{cursor:'pointer'}}/>
        <img src={ImgPath.STATUS} alt="status" style={{marginLeft:'10px', cursor:'pointer'}}/>
        <MessageIcon style={{marginBottom:'7px',marginLeft:'10px', cursor:'pointer'}}/>
        <MoreVertIcon style={{marginBottom:'7px',marginLeft:'10px',cursor:'pointer'}}/>
      </Box>
    </>
  );
};
