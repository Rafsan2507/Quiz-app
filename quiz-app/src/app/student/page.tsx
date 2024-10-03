import Student from '@/components/Students/Student'
import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Box>
        <Student/>
    </Box>
  )
}

export default page