import { UserRole } from '@prisma/client'
import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email().min(1, {
    message: 'Email is required'
  }),
  password: z.string().min(1, {
    message: 'Password is required'
  }),
  code: z.optional(z.string())
})

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  email: z.string().email().min(1, {
    message: 'Email is required'
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required'
  })
})

export const ResetSchema = z.object({
  email: z.string().email().min(1, {
    message: 'Email is required'
  })
})

export const NewPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: 'Minimum 6 characters required'
    }),
    password_confirmation: z.string().min(6, {
      message: 'Minimum 6 characters required'
    })
  })
  .refine(
    ({ password, password_confirmation }) => password === password_confirmation,
    {
      message: 'Password confirmation does not match',
      path: ['password_confirmation']
    }
  )

export const SettingSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().optional(),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    password: z.string().min(6).optional(),
    newPassword: z.string().min(6).optional(),
    isTwoFactorEnabled: z.boolean().optional()
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false
      }

      return true
    },
    {
      message: 'New Password is required',
      path: ['newPassword']
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false
      }

      return true
    },
    {
      message: 'Password is required',
      path: ['password']
    }
  )
