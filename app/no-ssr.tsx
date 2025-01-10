'use client'

import dynamic from 'next/dynamic'

export const ContentWithNoSSR = dynamic(() => import('@/app/content').then((mode) => mode.Content), { ssr: false })
