import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { useContext } from 'react'

import { NewEmployeeModalContext } from '../NewEmployeeModal/NewEmployeeModal.utils'
import { StyledLink, StyledButton } from './Navbar.style'

export default function Navbar() {
  const { setModalState } = useContext(NewEmployeeModalContext)
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <StyledLink href='/'>Employees</StyledLink>
          <Typography variant='h4'>Goal APP</Typography>
          <StyledButton onClick={() => setModalState(true)}>
            New Employee
          </StyledButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
