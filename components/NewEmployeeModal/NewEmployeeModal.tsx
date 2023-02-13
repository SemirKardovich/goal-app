import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useContext, useState, useMemo } from 'react'
import type { Employee } from '../../types'
import { CREATE_EMPLOYEE } from '@/graphql/mutation'
import { ModalPaper } from './NewEmployeeModal.style'
import {
  employeeInitialValues,
  employeeValidationSchema,
  NewEmployeeModalContext,
  GenderOptions,
} from './NewEmployeeModal.utils'
import { Field, FieldProps, Form, FormikProvider, useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { GET_EMPLOYEES } from '@/graphql/query'
export default function NewEmployeeModal() {
  const { modalState, setModalState } = useContext(NewEmployeeModalContext)

  const [createEmployee, { data, loading, error }] = useMutation(
    CREATE_EMPLOYEE,
    {
      refetchQueries: [{ query: GET_EMPLOYEES }],
    }
  )
  const handleSubmit = async (values: typeof employeeInitialValues) => {
    await createEmployee({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        bio: values.bio,
        birthDate: new Date(values.birthDate),
        email: values.email,
      },
    })

    handleClose()
  }

  const formik = useFormik({
    validateOnChange: true,
    initialValues: employeeInitialValues,
    validationSchema: employeeValidationSchema,
    onSubmit: (values) => handleSubmit(values),
  })

  const handleClose = () => {
    setModalState(false)
    formik.resetForm()
  }

  return (
    <Modal open={modalState} onClose={handleClose}>
      <ModalPaper>
        <FormikProvider value={formik}>
          <Form style={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h6'>Create new employee</Typography>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    name='firstName'
                    label='First name'
                    error={!!formik.errors.firstName}
                    helperText={formik.errors.firstName}
                    size='small'
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    name='lastName'
                    label='Last name'
                    error={!!formik.errors.lastName}
                    helperText={formik.errors.lastName}
                    size='small'
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size='small'>
                  <InputLabel id='gender-select-label'>Gender</InputLabel>
                  <Select
                    name='gender'
                    label='Gender'
                    value={formik.values.gender}
                    labelId='gender-select-label'
                    onChange={formik.handleChange}
                  >
                    {Object.values(GenderOptions).map((opt) => {
                      return (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      )
                    })}
                  </Select>
                  <FormHelperText sx={{ color: 'red' }}>
                    {formik.errors.gender}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    name='email'
                    label='Email'
                    error={!!formik.errors.email}
                    helperText={formik.errors.email}
                    size='small'
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    name='bio'
                    label='Bio'
                    error={!!formik.errors.bio}
                    helperText={formik.errors.bio}
                    multiline
                    minRows={5}
                    maxRows={10}
                    size='small'
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Grid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <Field name='birthDate'>
                      {({ field, form, meta }: FieldProps) => {
                        return (
                          <DatePicker
                            value={formik.values.birthDate}
                            onChange={(newValue) => {
                              form.setFieldTouched('birthDate', true)
                              formik.setFieldValue('birthDate', newValue)
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                size='small'
                                label='Date of birth'
                                error={!!(meta.touched && meta.error)}
                                helperText={
                                  meta.touched &&
                                  meta.error &&
                                  formik.errors.birthDate
                                }
                              />
                            )}
                          />
                        )
                      }}
                    </Field>
                  </FormControl>
                </Grid>
              </LocalizationProvider>
              <Grid item xs={12} display='flex' justifyContent='center'>
                <Button
                  type='submit'
                  variant='contained'
                  disabled={loading}
                  sx={{ width: '15rem', mt: 2 }}
                >
                  Create Employee
                </Button>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </ModalPaper>
    </Modal>
  )
}
