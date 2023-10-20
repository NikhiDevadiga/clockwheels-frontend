import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Spin } from 'antd';
import "../resources/authentication.css";
import axios from 'axios';

function Registration() {

    const [loading, setLoading] = useState(false)

    return (
        <div className='auth-parent'>
            {loading }
            <Form layout='vertical'>
                <h1>Register Here</h1>
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
                <Form.Item
                    name="confirm password"
                    label="Confirm Password"
                >
                    <Input type='password' />
                </Form.Item>
                <div className='d-flex align-items-center justify-content-between'>
                    <Button type='primary' htmlType='submit'>Register</Button>
                </div>
            </Form>
        </div>
    )
}

export default Registration;