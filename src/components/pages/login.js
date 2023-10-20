import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Spin } from 'antd';
import "../resources/authentication.css";
import axios from 'axios';

function Login() {

    const [loading, setLoading] = useState(false)

    return (
        <div className='auth-parent'>
            {loading}
            <Form layout='vertical'>
                <h1>Login Here</h1>
                <hr></hr>
                <Form.Item
                    name="username"
                    label="Username"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                >
                    <Input type='password' />
                </Form.Item>
                <div className='d-flex align-items-center justify-content-between'>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </div>
                <p>Username: John</p>
                <p>Password: 123456</p>
            </Form>
        </div>
    )
}

export default Login;