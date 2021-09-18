import { Form, Input, Button } from 'antd';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { rules } from '../utils/rules';
import { login } from '../redux/actionCreators/authAC'
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const { error, isLoading } = useTypedSelector(state => state.auth);

    const submit = () => {
        dispatch(login(username, password));
    }

    return (
        <Form
            labelCol={{ span: 11 }}
            onFinish={submit}
        >
            {error && <div style={{ color: "red" }}>
                {error}
            </div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <Input 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста, введите пароль!')]}
            >
                <Input 
                    type="password"
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 11 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form >
    )
}

export default LoginForm;
