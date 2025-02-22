'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { InputField, InputRoot } from '@/components/ui/input'
import { postSubscriptions } from '@/http/api'
import { useRouter, useSearchParams } from 'next/navigation'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo.'),
  email: z.string().email('Digite um e-mail válido.'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const referrer = searchParams.get('referrer')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ email, name }: SubscriptionSchema) {
    const { subscriberId } = await postSubscriptions({ email, name, referrer })

    push(`/invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="p-8 space-y-6 bg-gray-700 rounded-2xl w-full max-w-[441px]"
    >
      <h2 className="font-heading text-gray-200 font-semibold text-base md:text-lg">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-1">
          <InputRoot error={!!errors.name}>
            <User className="size-5" />
            <InputField
              {...register('name')}
              type="text"
              placeholder="Nome completo"
            />
          </InputRoot>
          {errors.name && (
            <p className="font-semibold text-xs text-danger">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <InputRoot error={!!errors.email}>
            <Mail className="size-5" />
            <InputField
              {...register('email')}
              type="text"
              placeholder="E-mail"
            />
          </InputRoot>
          {errors.email && (
            <p className="font-semibold text-xs text-danger">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
