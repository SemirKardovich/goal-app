import { DELETE_EMPLOYEE } from '@/graphql/mutation'
import { useMutation } from '@apollo/client'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import defaultProfilePic from '../../assets/defaultProfilePic.png'
import type { Employee } from '../../types'
import {
  StyledCard,
  StyledCardContent,
  StyledCardActions,
} from './EmployeeCard.style'

export default function EmployeeCard({ employee }: { employee: Employee }) {
  const { id } = employee
  const router = useRouter()
  const [deleteEmployee, { error, loading }] = useMutation(DELETE_EMPLOYEE, {
    variables: { id },
    onCompleted: () => {
      console.log('Item deleted!')
    },
  })
  return (
    <StyledCard>
      <StyledCardContent>
        <Box>
          <Typography variant='body1' component='p'>
            First name: {employee.firstName}
          </Typography>
          <Typography variant='body1' component='p'>
            Last name: {employee.lastName}
          </Typography>
        </Box>

        <Image
          src={employee?.profilePic?.url ?? defaultProfilePic}
          alt='employee profile picture'
          width={150}
          height={150}
        />
      </StyledCardContent>
      <StyledCardActions>
        <Button size='small' onClick={() => deleteEmployee()}>
          Delete Profile
        </Button>
        <Button
          size='small'
          onClick={() => router.push(`/profile/${employee.id}`)}
        >
          View Profile
        </Button>
      </StyledCardActions>
    </StyledCard>
  )
}
