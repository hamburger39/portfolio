import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Frontend Developer',
  description: 'フロントエンドエンジニアのポートフォリオサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#0ea5e9',
            },
            components: {
              Menu: {
                itemSelectedBg: 'rgba(14, 165, 233, 0.1)',
                itemSelectedColor: '#0ea5e9',
                itemHoverBg: 'rgba(14, 165, 233, 0.05)',
                itemHoverColor: '#0ea5e9',
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}

