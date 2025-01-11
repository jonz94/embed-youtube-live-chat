'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { parseYoutubeUrl } from '@/lib/parse-youtube-url'
import { useQueryState } from 'nuqs'
import { useRef } from 'react'
import { toast } from 'sonner'

export function InputUrlCard() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [, setVideoId] = useQueryState('v', { history: 'push' })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const value = inputRef.current?.value

        if (!value) {
          return
        }

        const { type, id } = parseYoutubeUrl(value)

        if (type !== 'video' || id === null) {
          toast.error('此網址並非 YouTube 直播網址')

          return
        }

        setVideoId(id)
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>與聊天室建立連線</CardTitle>
          <CardDescription className="max-w-sm">
            輸入 YouTube 直播網址，並按下開始，讓小程式可以讀取到聊天室訊息
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <Input ref={inputRef} type="text" placeholder="請輸入 YouTube 直播網址" />
        </CardContent>

        <CardFooter className="flex justify-between">
          <ModeToggle></ModeToggle>

          <Button type="submit">🚀 開始</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
