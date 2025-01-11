'use client'

import { InputUrlCard } from '@/app/input-url-card'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useQueryState } from 'nuqs'

export function Content() {
  const { resolvedTheme } = useTheme()
  const [videoId, setVideoId] = useQueryState('v', { history: 'push' })

  if (!videoId) {
    return <InputUrlCard></InputUrlCard>
  }

  return (
    <>
      <div className="flex justify-between">
        <Button size="icon" variant="outline" onClick={() => setVideoId(null)}>
          <ChevronLeft />
        </Button>

        <Button
          onClick={() => {
            // open the YouTube live chat page in a minimal popup window
            // docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#popup
            window.open(`https://www.youtube.com/live_chat?v=${videoId}`, undefined, 'popup=true')
          }}
        >
          以「獨立視窗」開啟此聊天室
          <ExternalLink />
        </Button>

        <ModeToggle></ModeToggle>
      </div>

      {/*
        the documentation for "Embed a Live Chat" is at the very bottom
        of the page https://support.google.com/youtube/answer/2524549?hl=en
      */}
      <iframe
        className="h-full overflow-hidden rounded-md border focus-within:outline-none"
        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}&${resolvedTheme === 'dark' ? 'light_theme=0&dark_theme=1' : 'light_theme=1&dark_theme=0'}`}
      ></iframe>
    </>
  )
}
