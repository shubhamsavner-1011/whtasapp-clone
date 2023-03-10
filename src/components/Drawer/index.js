/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Cookies from "js-cookie";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Header } from "./Header";
import { MainDetails } from "./MainDetails";
import { Avatar, ListItemIcon } from "@mui/material";
import { Chating } from "./Chating";
import { userChats } from "../../api/chatRequest";
import { getUser, users } from "../../api/userRequest";

const drawerWidth = 440;

const Time = styled("div")(() => ({
  fontSize: "12px",
  fontWeight: 600,
  color: "#1fa855",
}));

const Badge = styled("div")(() => ({
  fontSize: "12px",
  fontWeight: 600,
  color: "white",
  backgroundColor: "#25d366",
  borderRadius: "50%",
  width: "20px",
  textAlign: "center",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "767px",
    backgroundColor: "#f0f1f1",
    borderBottom: "7px solid #25d366",
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  backgroundColor: "#f0f1f1",
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export const Dashboard = () => {
  const [chat, setChat ] = useState(false);
  const [data, setData ] = useState();
  const [user, setUser] = useState();
//  const id = Cookies.get('id')
 const handleOpen = (id) => {
  setChat(true)
  const getUserData = async () => {
    try {
      const user= await getUser(id) 
      setUser(user)
    }
    catch (error){
      console.log(error)
    }
  }
  getUserData()
 }
  useEffect(()=> {
    const getAllUser = async () => {
      try {
            const user= await users() 
            setData(user)
          }
          catch (error){
            console.log(error)
          }
    }
    getAllUser();
  }, [])
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <DrawerHeader>
          <Header />
        </DrawerHeader>
        <Divider />
        <List>

          {data?.map((text, index) => (
            <>
              <ListItem key={index} disablePadding onClick={()=> handleOpen(text._id)}>
                <ListItemButton>
                  <ListItemIcon>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      style={{ cursor: "pointer" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={text.username} />
                  <Box>
                    <Time>7:13 Pm</Time>
                    <Badge>1</Badge>
                  </Box>
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
      <Main open={true}>
      {chat ? <Chating user={user}/> : <MainDetails />}
      </Main>
    </Box>
  );
};
