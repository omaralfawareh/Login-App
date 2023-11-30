import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone,Alert } from '@ant-design/icons';
import { Button, Input , Col,Row, Flex,message, Card } from 'antd';
import {email} from "../App.js";
import { useState } from 'react';
import { signInWithEmailAndPassword, signOut ,onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import './style.css'
import { auth } from "../firebase";
import {   } from "firebase/auth";
import { redirect, useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

   
    const HandleChange = (e) => {
        setEmail(e.target.value);
    }
    const HandlePassword = (e) => {
        setPassword(e.target.value);
    }
    const ValidateEmail = (e) => {
        if(email === null || email === undefined || password === null){
            message.warning("Invalid Input");
            return false;
        }
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            logIn();
            return true;
        } else {
            message.warning("Invalid email or password");
            return false;
        }
    }
    const logIn = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, password)
            message.success(`Welcome ${auth.currentUser.email}`)
            navigate('/home')
        }catch (error){
            message.error(`Unsuccessful Login`)
        }
    }
  return (
    <div className='container'>
        <div>
            <Card bordered={false} style={{ width: 350}}>
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
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={HandlePassword}
                />
                </Row>
                <Row className='row'>
                    <Button className='button'  onClick={ValidateEmail}> Login</Button>
                </Row>
                <Row className='row flex'>
                    <div>
                        <a href='/error'> fogot password? </a>
                    </div>
                </Row>
                <Row className='row flex'>
                        <div>Dont have an account?</div>
                        <div>
                            <a href='/signup'> &nbsp; Signup </a>
                        </div>
                </Row>
                <hr/> 
            </Card>
        </div>
    </div>
  )
}
export default Login

