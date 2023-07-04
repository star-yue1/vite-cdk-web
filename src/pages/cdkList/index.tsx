import { Button, Card, Col, Form, Input, Row, Table } from 'antd'
import React from 'react'

import dataSource from './data.json'
import { columns } from './colums';
import './style.scss'
function CdkList() {
  const [form] = Form.useForm();

  return (
    <Card style={{ border: 'none' }}>
      <div className='form'>

        <Form form={form} className='items' >
          <Row style={{ width: '100%' }}>
            <Col span={8}>
              <Form.Item
                label="Layout"
                name="layout"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Layout"
                name="layout"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Layout"
                name="layout"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Layout"
                name="layout"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className={'buttons'}>
          <Button type="primary" className='button'>提交</Button>
          <Button className='button'>重置</Button>
        </div>
      </div>

      <Table dataSource={dataSource} columns={columns} bordered={false}/>
    </Card>
  )
}

export default CdkList