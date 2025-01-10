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
            // open the YouTube live chat page in a minimal popup window
            // docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#popup
            window.open(`https://www.youtube.com/live_chat?v=${videoId}`, undefined, 'popup=true')
          }}
        >
          <ExternalLink />
          以「獨立視窗」模式開啟此聊天室
        </Button>
      </div>

      {/*
        the documentation for "Embed a Live Chat" is at the very bottom
        of the page https://support.google.com/youtube/answer/2524549?hl=en
      */}
      <iframe
        className="h-full focus-within:outline-none"
        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`}
      ></iframe>
    </>
  )
}
