import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Hero/Hero'
import IntroSplit from '../IntroSplit/IntroSplit'
import SelectedWork from '../SelectedWork/SelectedWork'
import Projects from '../Projects/Projects'
import Toolkit from '../Toolkit/Toolkit'
import Keyboard from '../Keyboard/Keyboard'
import CTA from '../CTA/CTA'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    if (!target) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <Hero />
      <SelectedWork />
      <Projects />
      <Toolkit />
      <IntroSplit />
      <Keyboard />
      <CTA />
    </>
  )
}
