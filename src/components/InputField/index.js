import { Box, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';





const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiFormLabel-root": {
    color: "black",
  },
  "& input": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // backgroundColor: 'white',
      borderRadius: 10,
      color: "gray"
    },
    "&:hover fieldset": {
      border: "1px solid gray",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid gray",
    },
  },
  "& .Mui-error": {
    "&:hover fieldset": {
      border: "1.5px solid red",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid red",
    },
    "&label.Mui-focused": {
      color: "black",
    },
    "&.MuiFormLabel-root": {
      color: "black",
    },
    "& input": {
      color: "red",
    },
  },
});
export const InputField = ({ placeholder }) => {
  const [data, setData] = useState()

  const handleChange = (val) => {
   setData(val)
  };
  const handleSubmit = () => {
    console.log(">>>>>>>>", data);
  }
  return (
    <div>
      <Box
        sx={{
          width: 800,
          maxWidth: "100%",
        }}
      >
        <Input
          placeholder={placeholder}
          fullWidth
          onChange={(e) => handleChange(e.target.value)}
          InputProps={{endAdornment: <SendIcon style={{cursor:"pointer"}} onClick={handleSubmit}/>}}
        />
      </Box>
    </div>
  );
};
