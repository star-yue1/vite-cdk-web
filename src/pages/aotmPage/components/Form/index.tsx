import { Form, Input } from 'antd'
import React from 'react'

export default function () {
  const [form] = Form.useForm()
  const onFormLayoutChange = () => {}
  return (
    <section>
      <Form layout={'inline'} form={form} onValuesChange={onFormLayoutChange}>
        <Form.Item
          label="Field A"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
    </section>
  )
}
