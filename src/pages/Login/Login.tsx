import React from "react";
import {Button, Form, Input} from "antd";
import {LoginViewModel} from "../../api/swagger";
import AccountApi from "../../api/AccountApi";
import {useDispatch} from "react-redux";
import {login} from "../../store/user/userSlice";

import styles from './Login.module.css';

const LoginPage: React.FC = () => {
    const [form] = Form.useForm<LoginViewModel>();
    const dispatch = useDispatch()

    const handleFinish = React.useCallback((values: LoginViewModel) => {
        if (values.login && values.password) {
            AccountApi.login(values.login, values.password)
                .then(AccountApi.getUser)
                .then(user => dispatch(login(user)))
                .catch(console.log)
        }
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.card}>
                <Form
                    form={form}
                    layout="vertical"
                    hideRequiredMark
                    onFinish={handleFinish}
                    className={styles.wrapper}
                >
                    <h1 className={styles.title}>Log In</h1>

                    <div>
                        <Form.Item name="login" rules={[{required: true}]}>
                            <Input placeholder="login"/>
                        </Form.Item>

                        <Form.Item name="password" rules={[{required: true}]}>
                            <Input.Password placeholder="password"/>
                        </Form.Item>
                    </div>

                    <div className={styles.footer}>
                        <Button block type="primary" htmlType="submit">
                            lets chat!
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    )
};

export default LoginPage;