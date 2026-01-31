'use client'

import { Card, Row, Col, Tooltip } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { FaGithub } from 'react-icons/fa'
import { SiWantedly, SiQiita, SiZenn } from 'react-icons/si'

const links = [
  {
    name: 'GitHub',
    icon: <FaGithub className="w-16 h-16" />,
    url: 'https://github.com/hamburger39',
    color: '#ffffff',
  },
  {
    name: 'Wantedly',
    icon: <SiWantedly className="w-16 h-16" />,
    url: 'https://www.wantedly.com',
    color: '#00A4BB',
  },
  {
    name: 'YOUTRUST',
    icon: (
      <svg
        className="w-16 h-16"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    url: 'https://youtrust.jp',
    color: '#2f80ed',
  },
  {
    name: 'Qiita',
    icon: <SiQiita className="w-16 h-16" />,
    url: 'https://qiita.com',
    color: '#55c500',
  },
  {
    name: 'Zenn',
    icon: <SiZenn className="w-16 h-16" />,
    url: 'https://zenn.dev',
    color: '#3ea8ff',
  },
]

export default function LinksSection() {
  return (
    <section
      id="links"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Links
        </h2>
        <Row gutter={[24, 24]} justify="center">
          {links.map((link) => (
            <Col xs={12} sm={8} lg={4} key={link.name}>
              <Card
                className="bg-black border-white h-full text-center hover:border-blue-500 transition-all duration-300 cursor-pointer"
                bordered={true}
                hoverable
                onClick={() => window.open(link.url, '_blank')}
              >
                <Tooltip title={link.name} placement="top">
                  <div
                    className="flex items-center justify-center"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </div>
                </Tooltip>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="mt-8 text-center text-gray-400 text-sm flex items-center justify-center gap-2">
          <LinkOutlined /> アイコンをクリックすると各サービスへ移動します
        </div>
      </div>
    </section>
  )
}

