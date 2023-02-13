import type { Employee } from '../../types'
import { createContext } from 'react'
import { array, object, string } from 'yup'

export const employeeInitialValues = {
  firstName: '',
  lastName: '',
  gender: '',
  birthDate: '',
  email: '',
  bio: '',
}

export const employeeValidationSchema = object({
  firstName: string().required('Required Field'),
  lastName: string().required('Required Field'),
  gender: string().required('Required Field'),
  birthDate: string().required('Required Field'),
  email: string().required('Required Field'),
  bio: string(),
})

export const NewEmployeeModalContext = createContext({
  modalState: false,
  setModalState: (_modalState: boolean) => {},
})

export const GenderOptions = {
  male: { value: 'male', label: 'Male' },
  female: { value: 'female', label: 'Female' },
  other: { value: 'other', label: 'Other' },
}
