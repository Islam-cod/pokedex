import React from 'react'
import { Alert } from '../styles/AlertStyles';

function ErrorComponent({error}) {
  return (
    <Alert> {error} </Alert>
  )
}

export default ErrorComponent;