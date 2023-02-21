import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { VedioPlayer } from "../../components/vedioPlayer";
const TutorialHead = styled(Typography)`
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  color: #41525d;
  margin: 40px 0 20px 0;
  text-align: center;
`;
const Container = styled(Box)`
background-color: #F2F2F2;
marginTop: 40px;
height: 400px;
`
export const Tutorial = () => {
  return (
    <Container>
      <TutorialHead>Tutorial</TutorialHead>
      <Box style={{textAlign:'center'}}>
      <Link href="#" style={{color: '#008069'}}>Need help to get started?</Link>
      </Box>
      <Box>
      <VedioPlayer/>
      </Box>
    </Container>
  );
};
