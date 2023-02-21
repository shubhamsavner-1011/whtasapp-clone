import React from "react";
import { Box, Dialog, Grid, styled, Typography } from "@mui/material";
import { OrderList } from "../List";
import { Tutorial } from "../../containers/Tutorial";
import { QrCode } from "../qrcode";

const DailogStyle = {
  maxHeight: "100%",
  height: "97%",
  width: "57%",
  maxWidth: "100%",
  marginTop: "9%",
  // overflow: "none",
};
const SubHeading = styled(Typography)`
  color: #41525d;
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 50px;
`;
export const DailogBox = () => {
  return (
    <Box>
      <Dialog
        PaperProps={{ sx: DailogStyle }}
        BackdropProps={{ invisible: true }}
        open={true}
      >
        <Grid container spacing={2} sx={{padding:'60px'}}>
          <Grid item xs={6} md={8}>
            <Box>
              <SubHeading>Use WhatsApp on your computer</SubHeading>
              <OrderList />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box>
            <QrCode/>
            </Box>
          </Grid>
        </Grid>
        <Tutorial/>
      
      </Dialog>
    </Box>
  );
};
