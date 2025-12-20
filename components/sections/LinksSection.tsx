'use client'

import { Card, Row, Col, Tooltip } from 'antd'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

const IconCircle = ({
  label,
  color,
}: {
  label: string
  color: string
}) => (
  <span
    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg"
    style={{ backgroundColor: color }}
  >
    {label}
  </span>
)

const links = [
  {
    name: 'GitHub',
    icon: <GithubOutlined className="text-3xl" />,
    url: 'https://github.com',
    color: '#24292e',
  },
  {
    name: 'Wantedly',
    icon: <IconCircle label="W" color="#00A4BB" />,
    url: 'https://www.wantedly.com',
    color: '#00A4BB',
  },
  {
    name: 'YOUTRUST',
    icon: <IconCircle label="Y" color="#2f80ed" />,
    url: 'https://youtrust.jp',
    color: '#2f80ed',
  },
  {
    name: 'Qiita',
    icon: <IconCircle label="Q" color="#55c500" />,
    url: 'https://qiita.com',
    color: '#55c500',
  },
  {
    name: 'Zenn',
    icon: <IconCircle label="Z" color="#3ea8ff" />,
    url: 'https://zenn.dev',
    color: '#3ea8ff',
  },
]

export default function LinksSection() {
  return (
    <section
      id="links"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Links
        </h2>
        <Row gutter={[24, 24]} justify="center">
          {links.map((link) => (
            <Col xs={12} sm={8} lg={4} key={link.name}>
              <Card
                className="bg-gray-900/50 backdrop-blur-sm border-gray-700 h-full text-center hover:border-blue-500 transition-all duration-300 cursor-pointer"
                bordered={false}
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

