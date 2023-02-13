import { Employee } from '@/types'
import { Box } from '@mui/system'
import { useMemo, useState } from 'react'
import Navbar from '../Navbar'
import NewEmployeeModal from '../NewEmployeeModal'
import { NewEmployeeModalContext } from '../NewEmployeeModal/NewEmployeeModal.utils'
import { LayoutChildrenContainer } from './Layout.style'

export default function Layout({ children }: { children: JSX.Element }) {
  const [modalState, setModalState] = useState<boolean>(false)
  const [employee, setEmployee] = useState<Employee>({} as Employee)

  const value = useMemo(
    () => ({
      modalState,
      setModalState,
      employee,
      setEmployee,
    }),
    [modalState, employee]
  )
  return (
    <Box>
      <NewEmployeeModalContext.Provider value={value}>
        <Navbar />
        <LayoutChildrenContainer>{children}</LayoutChildrenContainer>
        <NewEmployeeModal />
      </NewEmployeeModalContext.Provider>
    </Box>
  )
}
