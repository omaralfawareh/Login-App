import React from 'react'
import {Link,useNavigate} from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone,GoogleOutlined } from '@ant-design/icons';
import { Button, Input , Col,Row, Flex, message,Card } from 'antd';
import './style.css'
import { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const provider = new GoogleAuthProvider();

    const googleLogin = async () => {
            signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        message.success(`Welcome ${user.displayName}`)
        navigate('/home')
    }).catch((error) => {
        message.error(error.message)
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
    }

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
            message.warning("Invalid Input");
        }else{
            if(ValidateEmail(email) && ValidatePassword(password)){
                signUp()
            }
        }
    }
    const ValidateEmail =  (e) => {
        
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(validRegex)) {
            message.warning("Invalid Email Address");
            return false;
        } 
        return true
    }
    const ValidatePassword =  (e) => {
        //Minimum eight characters, at least one letter, one number and one special character
        var validRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if(password.match(validRegex) && password === password2){
            return true;
        }else{
            message.warning("Invalid Password");
            return false;
        }
    }
    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email, password)
            message.success('Successful Signup')
            navigate('/home')
        }catch (error){
            message.error('Unsuccessful Signup')
        }
    }
    // const { signup } = useAuth()
  return (
    <div className='container'>
        <Card bordered={false} style={{ width: 350}}>
            <div>
                <Row className='row'>
                <h1>Signup</h1>
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
            <Row className='row'>
                <Button className='button' icon={<GoogleOutlined />} onClick={googleLogin}>  Login with Google</Button>
            </Row>
        </Card>
    </div>
  )
}
export default Signup

