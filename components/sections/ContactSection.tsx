'use client'

import React from 'react'
import { Card, Form, Input, Button, message } from 'antd'
import { MailOutlined, UserOutlined } from '@ant-design/icons'

const { TextArea } = Input

export default function ContactSection() {
  const [form] = Form.useForm()
  const [loading, setLoading] = React.useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (response.ok) {
        message.success(data.message || 'お問い合わせありがとうございます！')
        form.resetFields()
      } else {
        message.error(data.error || '送信に失敗しました。')
      }
    } catch (error) {
      console.error('Error:', error)
      message.error('送信に失敗しました。しばらくしてから再度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Contact
        </h2>
        <Card
          className="bg-black border-white"
          bordered={true}
        >
          <Form
            form={form}
            name="contact"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'お名前を入力してください' }]}
            >
              <Input  
                prefix={<UserOutlined />}
                placeholder="お名前"
                size="large"
                className="bg-white border-gray-300 placeholder-black"
                style={{ background: '#737373', borderColor: '#d1d5db', color: '#000000'}}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'メールアドレスを入力してください' },
                { type: 'email', message: '有効なメールアドレスを入力してください' },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="メールアドレス"
                size="large"
                className="bg-white border-gray-300"
                style={{ background: '#737373', borderColor: '#d1d5db', color: '#000000' }}
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: 'メッセージを入力してください' }]}
            >
              <TextArea
                placeholder="メッセージ"
                rows={6}
                size="large"
                className="bg-white border-gray-300"
                style={{ background: '#737373', borderColor: '#d1d5db', color: '#000000' }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={loading}
                className="bg-blue-500 hover:bg-blue-600"
              >
                送信
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </section>
  )
}

