import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input , Col,Row, Flex } from 'antd';
import {email} from "../App.js";
import { useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import './style.css'
import { auth } from "../firebase";


export const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [user, setUser] = useState()
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser)
    // })
    const HandleChange = (e) => {
        setEmail(e.target.value);
    }
    const HandlePassword = (e) => {
        setPassword(e.target.value);
    }
    const ValidateEmail = (e) => {
        if(email === null || email === undefined){
            alert("Invalid Input");
            return false;
        }
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            alert("Valid email address!");
            logIn();
            return true;
        } else {
            alert("Invalid email address!");
            return false;
        }
    }
    const logIn = async () => {
        try{
            const user =  signInWithEmailAndPassword(email, password)
            alert(auth.currentUser.email)
        }catch (error){
            alert(error.message)
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
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined onChange={HandlePassword}/>)}
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

