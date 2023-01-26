import React from 'react'
import { UserStorage } from './UserStorage'

export const Providers = ({children}) => {
  return (
    <UserStorage>{children}</UserStorage>
  )
}
