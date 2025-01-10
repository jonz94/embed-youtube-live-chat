'use client'

import dynamic from 'next/dynamic'

// NOTE: disable pre-rendering is necessary to avoid `window is not defined` error
// docs: https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr
export const ContentWithNoSSR = dynamic(() => import('@/app/content').then((mode) => mode.Content), { ssr: false })
