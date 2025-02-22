import { Radio } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { SubscriptionForm } from './subscription-form'

export default function Home() {
  return (
    <div className="w-full min-h-dvh flex flex-col justify-center gap-10 md:gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start w-full max-w-[550px]">
        <Image src={logo} width={108.5} height={30} alt="devstage" />
        <h1 className="font-heading leading-none font-medium text-4xl md:text-7xl text-center md:text-left flex flex-col">
          <span className="text-blue">CodeCraft</span>
          Summit 2025
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-between gap-5">
        <div className="p-8 bg-gray-700 rounded-2xl flex flex-col gap-8 flex-1">
          <div className="flex items-center justify-between">
            <span className="font-heading text-gray-200 font-semibold text-xl md:text-lg">
              Sobre o evento
            </span>
            <div className="flex items-center gap-2 text-purple font-semibold text-xs uppercase">
              <Radio />
              Ao vivo
            </div>
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>

        <SubscriptionForm />
      </div>
    </div>
  )
}
