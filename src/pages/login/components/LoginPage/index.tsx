import React from "react";
import { Button, Card, Form, Input } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onClickLogin = async () => {
    console.log('form', form.getFieldsValue());
    const value = await form.validateFields()
    console.log('value', value);
    sessionStorage.setItem("login", "true")
    localStorage.setItem("blogToken", "blogToken")
    navigate('/', { replace: true })
  }
  return (
    <Card
      bordered={false}
      style={{
        width: 300,
        height: 300,
        marginTop: 100,
        backgroundColor: "rgba(255,255,255,.2)",
        userSelect: 'none'
      }}
    >
      <h2 className={"login-title"}>登录页面</h2>
      <Form form={form} name="validateOnly">
        <Form.Item name="name" rules={[{ required: true, message: '请输入账号' }]}>
          <Input placeholder="请输入账号" />
        </Form.Item>
        <Form.Item name="pwd" rules={[{ required: true, message: '请输入密码' }]}>
          <Input placeholder="请输入密码" />
        </Form.Item>
      </Form>
      <div >
        <Button style={{ width: '100%' }} type="primary" onClick={onClickLogin}>登录</Button>
      </div>
    </Card>
  );
}
