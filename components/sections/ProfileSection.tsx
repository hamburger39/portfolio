'use client'

import { Card, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Profile
        </h2>
        <Card
          className="bg-gray-900/50 backdrop-blur-sm border-gray-700"
          bordered={false}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar
              size={150}
              icon={<UserOutlined />}
              className="bg-blue-500"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-white">
                フロントエンド開発者
              </h3>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                フロントエンド開発者の平林佳祐です。株式会社Univearthで業務委託契約を結んでおり、現在開発中のWebアプリケーションでは、React、Next.js、TypeScriptを使用しています。
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

