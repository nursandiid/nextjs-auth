'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import UserButton from '@/components/auth/user-button'

export default function Navbar() {
  const pathname = usePathname()
  const menus = [
    { label: 'Server', href: '/server' },
    { label: 'Client', href: '/client' },
    { label: 'Admin', href: '/admin' },
    { label: 'Settings', href: '/settings' }
  ]

  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-xl shadow-sm">
      <div className="flex gap-x-2">
        {menus.map((menu) => (
          <Button
            key={menu.href}
            asChild
            variant={pathname === menu.href ? 'default' : 'outline'}
          >
            <Link href={menu.href}>{menu.label}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </div>
  )
}
