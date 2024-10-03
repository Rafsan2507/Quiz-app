import Home from '@/components/Home/Home'
import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Box bg={"#f9f4fa"} h={"100vh"}>
        <Home/>
    </Box>
  )
}

export default page