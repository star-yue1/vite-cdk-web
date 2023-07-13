import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { splitArray } from '../../utils/split'
import './style.scss'

export default function () {
  const [form] = Form.useForm()
  const onFormLayoutChange = () => { }

  const onSearch = () => {
    console.log('form', form.getFieldsValue());
  }
  const formatFormConfig = (field, renderItem: React.ReactElement) => {
    return React.cloneElement(renderItem, {})
  }

  const formConfig = () => {
    const baseConfig = [
      formatFormConfig(
        'name',
        <Form.Item
          label="Layout"
          name="layout"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
      ),
      formatFormConfig(
        'name',
        <Form.Item
          label="Layout"
          name="layout"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
      ),
      formatFormConfig(
        'name',
        <Form.Item
          label="Layout"
          name="layout"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
      )
    ]
    const config = splitArray(baseConfig);
    return config;
  }
  const config = formConfig();

  return (
    <section>
      <div className='customForm'>
        <Form layout='horizontal' form={form} onValuesChange={onFormLayoutChange} className='items' >
          {
            config.map((item, index) => {
              return <Row style={{ width: '100%' }} key={index}>
                {
                  item.map((ItemForm, indexForm) => {
                    return <Col span={8} key={indexForm}>
                      {ItemForm}
                    </Col>
                  })
                }
              </Row>
            })
          }
        </Form>
        <div className={'buttons'}>
          <Button type="primary" className='button' onClick={onSearch}>提交</Button>
          <Button className='button'>重置</Button>
        </div>
      </div>
    </section>
  )
}
