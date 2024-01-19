'use client'

import { logout } from '@/actions/logout'
import { Card } from '@/components/ui/card'

export default function SettingPage() {
  const onClick = () => {
    logout()
  }

  return (
    <Card className="p-4">
      <button onClick={onClick}>Sign out</button>
    </Card>
  )
}
