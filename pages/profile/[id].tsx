import LoadingContainer from '@/components/LoadingContainer'
import ProfileInfo from '@/components/ProfileInfo'
import { GET_EMPLOYEE } from '@/graphql/query'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

export default function Profile() {
  const router = useRouter()
  const { id } = router.query
  const { loading, data } = useQuery(GET_EMPLOYEE, {
    variables: { id },
  })
  return (
    <LoadingContainer isLoading={loading}>
      <ProfileInfo employee={data?.employee} />
    </LoadingContainer>
  )
}
