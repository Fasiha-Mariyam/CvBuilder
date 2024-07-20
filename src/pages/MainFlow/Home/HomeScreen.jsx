/* eslint-disable no-unused-vars */
import React from 'react'
import ResponsiveAppBar from '../../../components/Navbar/ResponsiveAppBar'
import TemplateCard from '../../../components/Card/TemplateCard'
import { Divider } from '@mui/material'

export default function HomeScreen() {
  return (
    <>
    <ResponsiveAppBar current={"Home"}/>
    <Divider sx={{mb:3}}/>
    <TemplateCard/>
    </>
  )
}
