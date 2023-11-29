import React from 'react'
import {Link} from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input ,Flex } from 'antd';

export const login = () => {
  return (
    <div className='container'>
        <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
        <Button><Link to="/signup"> Login </Link></Button>
        <Button><Link to="/signup"> Sign up </Link></Button>
    </div>
  )
}
export default login

