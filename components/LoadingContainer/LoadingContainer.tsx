import { Box, CircularProgress } from '@mui/material'
import React from 'react'

type LoaderContainerProps = {
  isLoading?: boolean
  children: JSX.Element | JSX.Element[]
}

export default function LoadingContainer({
  isLoading,
  children,
}: LoaderContainerProps) {
  return isLoading ? (
    <Box
      display='flex'
      height='100%'
      width='100%'
      flexGrow={1}
      alignItems='center'
      justifyContent='center'
    >
      <CircularProgress />
    </Box>
  ) : (
    <>{children}</>
  )
}
