'use client'

import { InputUrlCard } from '@/app/input-url-card'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { LucideChevronLeft, LucideExternalLink } from 'lucide-react'
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
          <LucideChevronLeft />
        </Button>

        <TooltipProvider delayDuration={250}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="text-[red] hover:text-[red]/90" asChild>
                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>YouTube</title>
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent id="abc">
              <p className="flex items-center gap-x-2">
                開啟此 YouTube 直播
                <LucideExternalLink className="size-4" />
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button
          onClick={() => {
            // open the YouTube live chat page in a minimal popup window
            // docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#popup
            window.open(`https://www.youtube.com/live_chat?v=${videoId}`, undefined, 'popup=true')
          }}
        >
          以「獨立視窗」開啟此聊天室
          <LucideExternalLink />
        </Button>

        <ModeToggle></ModeToggle>
      </div>

      {/*
        the documentation for "Embed a Live Chat" is at the very bottom
        of the page https://support.google.com/youtube/answer/2524549?hl=en
      */}
      <iframe
        className="h-full overflow-hidden rounded-md border focus-within:outline-hidden"
        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}&${resolvedTheme === 'dark' ? 'light_theme=0&dark_theme=1' : 'light_theme=1&dark_theme=0'}`}
      ></iframe>
    </>
  )
}
