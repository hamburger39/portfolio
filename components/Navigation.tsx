'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

const navItems: MenuProps['items'] = [
  { key: '/', label: <Link href="/">Home</Link> },
  { key: '/profile', label: <Link href="/profile">Profile</Link> },
  { key: '/skills', label: <Link href="/skills">Skills</Link> },
  { key: '/links', label: <Link href="/links">Links</Link> },
  { key: '/contact', label: <Link href="/contact">Contact</Link> },
]

export default function Navigation() {
  const pathname = usePathname()
  const selectedKey = pathname === '/' ? '/' : `/${pathname.split('/')[1] || ''}`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 tracking-tight no-underline"
          >
            Portfolio
          </Link>
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={navItems}
            className="bg-transparent border-none min-w-0 flex-1 justify-end [&_.ant-menu-item]:text-white [&_.ant-menu-item-selected]:text-blue-400"
          />
        </div>
      </div>
    </nav>
  )
}

