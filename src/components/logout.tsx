'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function LogoutPage() {
  return (
    <Link href="/" onClick={() => signOut()}>
      Logout
    </Link>
  )
}
