import { NextAuthOptions } from 'next-auth'

// import clientPromise from '@/lib/MongodbClient'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signin`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })
        body: JSON.stringify(credentials)
        const user = await res.json()
        if (res.ok && user) {
          return user
        }
        return null
      }
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: {},
    //     password: {}
    //   }
    //   async authorize(credentials, req) {
    //     const client = await clientPromise
    //     const db = client.db() as any

    //     const user = await db
    //       .collection('users')
    //       .findOne({ email: credentials?.email })

    //     const bcrypt = require('bcrypt')

    //     const passwordCorrect = await bcrypt.compare(
    //       credentials?.password,
    //       user?.password
    //     )

    //     if (passwordCorrect) {
    //       return {
    //         id: user?._id,
    //         email: user?.email
    //       }
    //     }

    //     console.log('credentials', credentials)
    //     return null
    //   }
    // })
  ]
  // callbacks: {
  //   jwt: async ({ user, token, trigger, session }) => {
  //     if (trigger === 'update') {
  //       return { ...token, ...session.user }
  //     }
  //     return { ...token, ...user }
  //   }
  // }
}
