import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import defaultProfilePic from '../../assets/defaultProfilePic.png'
import type { Employee } from '../../types'

export default function ProfileInfo({ employee }: { employee: Employee }) {
  return (
    <Box
      display='flex'
      gap={4}
      justifyContent='space-around'
      alignItems='center'
    >
      <Box display='flex' flexDirection='column'>
        <Typography variant='h5'>
          Name : {`${employee.firstName} ${employee.lastName}`}
        </Typography>
        <Typography variant='h5'>
          Date of birth : {new Date(employee.birthDate).toLocaleDateString()}
        </Typography>
        <Typography variant='h5'>Gender : {employee.gender}</Typography>
        <Typography variant='h5'>Email : {employee.email}</Typography>
        <Typography variant='h5'>Bio : {employee.bio}</Typography>
      </Box>
      <Box>
        <Image
          src={employee?.profilePic?.url ?? defaultProfilePic}
          alt='employee profile picture'
          width={250}
          height={250}
        />
      </Box>
    </Box>
  )
}
