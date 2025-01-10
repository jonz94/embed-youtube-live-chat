import { ContentWithNoSSR } from '@/app/no-ssr'

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center p-4">
      <main className="flex h-full w-96 flex-col justify-center gap-y-4">
        <ContentWithNoSSR></ContentWithNoSSR>
      </main>
    </div>
  )
}
