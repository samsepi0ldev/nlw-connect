import Image from 'next/image'

import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import { getRanking } from '@/http/api'

const MEDALS = [medalGold, medalSilver, medalCooper]

interface RankingProps {
  subscriberId: string
}

export async function Ranking({ subscriberId }: RankingProps) {
  const { ranking } = await getRanking()
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl font-semibold text-gray-200">
        Ranking de indicações
      </h2>
      <div className="space-y-2 md:space-y-4">
        {ranking.map(({ id, name, score }, index) => (
          <div
            key={id}
            className="relative px-7 py-6 bg-gray-700 border border-gray-600 rounded-xl flex flex-col gap-2"
          >
            <span className="text-gray-300">
              <b>{index + 1}°</b> | {name}
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 flex gap-3">
              {score}
              {id === subscriberId && (
                <span className="font-sans text-xs font-semibold text-gray-300 bg-gray-500 rounded-md px-3 py-1 leading-none h-7 flex items-center">
                  Você
                </span>
              )}
            </span>
            <Image
              className="absolute top-0 right-8"
              src={MEDALS[index]}
              alt="Primeiro colocado"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
