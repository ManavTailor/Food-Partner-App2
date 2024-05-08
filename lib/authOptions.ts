import { NextAuthOptions } from 'next-auth'

// import clientPromise from '@/lib/MongodbClient'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'email' },
    //     password: { label: 'Password', type: 'password' }
    //   },

    //   async authorize(credentials, req) {
    //     console.log('credentials', credentials)

    //     const client = await db.user.findUnique({
    //       where: { email: credentials?.email }
    //     })

    //     if (client) {
    //       const passwordCorrect = await compare(
    //         credentials?.password || '',
    //         client.password
    //       )

    //       if (passwordCorrect) {
    //         return {
    //           id: client.id,
    //           email: client.email
    //         }
    //       }
    //     } else {
    //       return 'User not found!'
    //     }
    //     return null
    //   }
    // }),

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
