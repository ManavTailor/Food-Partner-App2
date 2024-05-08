import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import * as z from 'zod'
import { db } from '../../../../lib/db'

// Define a schema for input validation
const userSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  userName: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters')
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, userName, password } = userSchema.parse(body)

    // Check if the email already exists
    const existingEmail = await db.user.findUnique({
      where: { email: email }
    })

    if (existingEmail) {
      return NextResponse.json(
        { user: null, message: 'Email already exists' },
        { status: 409 }
      )
    }

    // Check if the username already exists
    const existingUsername = await db.user.findUnique({
      where: { userName: userName }
    })

    if (existingUsername) {
      return NextResponse.json(
        { user: null, message: 'Username already exists' },
        { status: 409 }
      )
    }

    // Create the user
    const hashedPassword = await hash(password, 10)
    const newUser = await db.user.create({
      data: {
        email,
        name,
        userName,
        password: hashedPassword
      }
    })

    const { password: newUserPassword, ...rest } = newUser
    return NextResponse.json(
      {
        user: rest,
        message: 'User created successfully'
      },
      { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { user: null, message: error.message },
      { status: 500 }
    )
  }
}
