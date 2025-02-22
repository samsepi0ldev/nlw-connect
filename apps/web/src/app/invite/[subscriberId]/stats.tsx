import {
  getSubscriberIdRankingClick,
  getSubscriberIdRankingCount,
  getSubscriberIdRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberIdRankingClick(subscriberId)
  const { count: inviteCount } = await getSubscriberIdRankingCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberIdRankingPosition(subscriberId)

  return (
    <div className="w-full grid md:grid-cols-3 gap-2 md:gap-3">
      <div className="relative rounded-xl flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-6 py-7">
        <MousePointerClick className="text-purple size-5 absolute top-3 left-3" />
        <span className="text-2xl font-heading font-semibold text-gray-200">
          {accessCount}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Acessos ao link
        </span>
      </div>

      <div className="relative rounded-xl flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-6 py-7">
        <BadgeCheck className="text-purple size-5 absolute top-3 left-3" />
        <span className="text-2xl font-heading font-semibold text-gray-200">
          {inviteCount}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Inscrições feitas
        </span>
      </div>

      <div className="relative rounded-xl flex flex-col items-center justify-center bg-gray-700 border border-gray-600 px-6 py-7">
        <Medal className="text-purple size-5 absolute top-3 left-3" />
        <span className="text-2xl font-heading font-semibold text-gray-200">
          {rankingPosition ? `${rankingPosition}°` : '-'}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Posição no ranking
        </span>
      </div>
    </div>
  )
}
