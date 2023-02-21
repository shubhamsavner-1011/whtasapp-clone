
import { Box } from '@mui/material'
import React from 'react'
import { DailogBox } from '../../components/DailogBox'
import { Header } from '../../layout/Header'

export const Login = () => {
  return (
    <Box style={{backgroundColor:'#e9edef'}}>
      <Header/>
      <DailogBox/>
    </Box>
  )
}
