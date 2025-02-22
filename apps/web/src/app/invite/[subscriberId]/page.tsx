import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { InviteLinkInput } from './invite-link-input'
import { Ranking } from './ranking'
import { Stats } from './stats'

interface InviteProps {
  params: {
    subscriberId: Promise<string>
  }
}

export default async function Ivite({ params }: InviteProps) {
  const subscriberId = await params.subscriberId

  const inviteLink = `http://localhost:3333/invites/${subscriberId}`
  return (
    <div className="w-full min-h-dvh flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-between">
      <div className="space-y-10 w-full max-w-[550px]">
        <Image
          src={logo}
          width={108.5}
          height={30}
          className="md:mx-0 mx-auto"
          alt="devstage"
        />

        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-heading font-semibold">
            Inscrição confirmada!
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-5 md:space-y-6">
          <div className="space-y-3">
            <span className="block font-heading font-semibold text-xl">
              Indique e Ganhe
            </span>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-wrap">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! {'\n'}É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} />
        </div>
      </div>

      <Ranking subscriberId={subscriberId} />
    </div>
  )
}
