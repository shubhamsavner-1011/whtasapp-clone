import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { InputField } from "../InputField";
import { getMessages } from "../../api/messageRequest";
const message = [
  { incoming: "hello" },
  { outgoing: "hello" },
  { incoming: "how are you?" },
];
const IncomingMessage = styled(Typography)`
  padding: 10px;
  background-color: #fff;
  color: black;
  text-align: start;
  width: 400px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const OutgoingMessage = styled(Typography)`
  padding: 10px;
  background-color: #b2ff9e;
  color: black;
  text-align: start;
  width: 400px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const ChatingFooter = ({user}) => {
 
  useEffect(()=> {
    const fetchMessages = async () => {
      try {
        const data = await  getMessages("63fe0b7d3a63cd23df10072b")
        console.log(data, 'getMessage>>>>')
      }
      catch(error){
        console.log(error)
      }
    }
    fetchMessages()
  })
  return (
    <>
      <Box
        sx={{
          p: 3,
          backgroundColor: "#eae6df",
          height: "622px",
          overflowY: "scroll",
          marginTop: "50px",
        }}
      >
        {message.map((item, index) => {
          return (
            <>
              {item.incoming && (
                <Box style={{ width: "100%" }}>
                  <Box>
                    <IncomingMessage>{item.incoming}</IncomingMessage>
                  </Box>
                </Box>
              )}
              {item.outgoing && (
                <Box
                  style={{
                    width: "100%",
                    justifyContent: "end",
                    display: "flex",
                  }}
                >
                  <Box>
                    <OutgoingMessage>{item.outgoing}</OutgoingMessage>
                  </Box>
                </Box>
              )}
            </>
          );
        })}
      </Box>

      <Box
        style={{
          backgroundColor: "#f0f1f1",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <InsertEmoticonIcon
            style={{ marginRight: "15px", color: "#54656f", cursor: "pointer" }}
          />
          <AttachmentOutlinedIcon
            style={{ color: "#54656f", cursor: "pointer" }}
          />
        </Box>
        <Box>
          <InputField placeholder="Type a message" user={user}/>
        </Box>
        <Box>
          <KeyboardVoiceIcon style={{ color: "#54656f", cursor: "pointer" }} />
        </Box>
      </Box>
    </>
  );
};
