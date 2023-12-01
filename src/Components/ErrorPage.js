import React from 'react'
import {Button, Card, Flex} from 'antd'

import './style.css'
const ErrorPage = () => {
  return (
    <div className='error'>
      <Flex vertical gap='middle'>
        <Card>
          <img width={350} alt='ERROR 404 NOT FOUND' src={require('../Assets/error.jpg')} />
        </Card>
        <Button className='button' type='primary' href='/login'>Back to Login </Button>
      </Flex>
    </div>
  )
}
export default ErrorPage