import React from 'react'
import {Link} from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input , Col,Row, Flex } from 'antd';
import './style.css'
import { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithCredential } from 'firebase/auth';
export const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const HandleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const HandlePassChange = (e) => {
        setPassword(e.target.value);
    }
    const HandlePass2Change = (e) => {
        setPassword2(e.target.value);
    }
    const ValidateInput = () => {
        if(email === null || email === undefined || password === undefined || password2 === undefined){
            alert("Invalid Input");
        }else{
            if(ValidateEmail(email) && ValidatePassword(password)){
                signUp()
            }
        }
        
    }
    const ValidateEmail =  (e) => {
        
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            alert("Valid email address!");
            return true;
        } else {
            alert("Invalid email address!");
            return false;
        }
    }
    const ValidatePassword =  (e) => {
        //Minimum eight characters, at least one letter, one number and one special character
        var validRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if(password.match(validRegex) && password === password2){
            alert("Valid Password");
            return true;
        }else{
            alert("Invalid Password");
            return false;
        }
    }
    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email, password)
        }catch (error){
            console.log(error)
        }
    }
    // const { signup } = useAuth()
  return (
    <div className='container'>
        <div>
            <div>
                <Row className='row'>
                <h1>Sign up</h1>
                </Row>
            </div>
            <Row className='row'>
                <Input placeholder="Email" onChange={HandleEmailChange}/>
            </Row>
            <Row className='row'>
                <Input.Password
                placeholder="Password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={HandlePassChange}/>
            </Row>
            <Row className='row'>
                <Input.Password
                placeholder="Confirm Password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={HandlePass2Change}/>
            </Row>
            <Row className='row'>
                <Button className='button' onClick={ValidateInput}> Signup </Button>
            </Row>
            <Row className='row flex'>
                <div>Already have an account?</div>
                <div>
                    <a href='/login'> &nbsp; Login </a>
                </div>
            </Row>
            <hr/>
        </div>
    </div>
  )
}
export default Signup

