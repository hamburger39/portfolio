'use client'

import { Card, Row, Col } from 'antd'

const skills = [
  { name: 'JavaScript', years: 1, accent: '#F7DF1E' },
  { name: 'TypeScript', years: 1, accent: '#3178C6' },
  { name: 'React', years: 1, accent: '#61DAFB' },
  { name: 'Next.js', years: 1, accent: '#000000' },
  { name: 'HTML/CSS', years: 1, accent: '#E34F26' },
  { name: 'Tailwind CSS', years: 1, accent: '#06B6D4' },
  { name: 'Ant Design', years: 1, accent: '#0170FE' },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <Row gutter={[24, 24]}>
          {skills.map((skill) => (
            <Col xs={24} sm={12} lg={8} key={skill.name}>
              <Card
                className="bg-black border-white h-full"
                bordered={true}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: skill.accent }}
                  />
                </div>
                <p className="text-2xl font-bold text-blue-200">
                  {skill.years} 年
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  実務経験年数
                </p>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="mt-12 text-center">
          <Card
            className="bg-black border-white"
            bordered={true}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              その他の技術
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Git',
                'GitHub',
                'Node.js',
                'REST API',
                'GraphQL',
                'Webpack',
                'Vite',
                'Jest',
                'ESLint',
                'Prettier',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

