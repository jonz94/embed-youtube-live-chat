'use client'

import { InputUrlCard } from '@/app/input-url-card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { useQueryState } from 'nuqs'

export function Content() {
  const [videoId, setVideoId] = useQueryState('v', { defaultValue: '' })

  if (!videoId) {
    return <InputUrlCard></InputUrlCard>
  }

  return (
    <>
      <div className="flex justify-between">
        <Button size="icon" variant="ghost" onClick={() => setVideoId('')}>
          <ChevronLeft />
        </Button>

        <Button
          onClick={() => {
            window.open(`https://www.youtube.com/live_chat?v=${videoId}`, undefined, 'popup=true')
          }}
        >
          <ExternalLink />
          以「獨立視窗」模式開啟此聊天室
        </Button>
      </div>

      <iframe
        className="h-full focus-within:outline-none"
        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`}
      ></iframe>
    </>
  )
}
