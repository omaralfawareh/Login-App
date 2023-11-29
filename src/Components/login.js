import React from 'react'
import {Link} from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input , Col,Row, Flex } from 'antd';
import {email} from "../App.js";
import { useState } from 'react';
import './style.css'



export const Login = () => {
    const [email, setEmail] = useState()
    const HandleChange = (e) => {
        setEmail(e.target.value);
    }
    const ValidateEmail = (e) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            alert("Valid email address!");
            return true;
        } else {
            alert("Invalid email address!");
            return false;
        }
    }
  return (
    <div className='container'>
        <div>
            <form>
                <div>
                    <Row className='row'>
                    <h1>Login</h1>
                    </Row>
                </div>
                <Row className='row'>
                    <Input placeholder="Email" htmlType='email' value={email} onChange={HandleChange}/>
                </Row>
                <Row className='row'>
                    <Input.Password
                    placeholder="Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                </Row>
                <Row className='row flex'>
                    <div>
                        <a href='test.com'> fogot password? </a>
                    </div>
                </Row>
                <Row className='row'>
                    <Button className='button' htmlType='submit' onClick={ValidateEmail}> Login</Button>
                </Row>
                <Row className='row flex'>
                        <div>Dont have an account?</div>
                        <div>
                            <a href='/signup'> &nbsp; Signup </a>
                        </div>
                </Row>
                <hr/> 
            </form>
        </div>
    </div>
  )
}
export default Login

