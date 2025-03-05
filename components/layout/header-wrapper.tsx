import { Suspense } from 'react'
import { Header } from './header'

export function HeaderWrapper() {
  return (
    <Suspense fallback={
      <header className="w-full h-[60px] md:h-[72px] bg-[#1F1F1F]" />
    }>
      <Header />
    </Suspense>
  )
} 