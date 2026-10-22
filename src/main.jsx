import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { CalendarDays, Clock3, Sparkles } from 'lucide-react'
import './style.css'

function App() {
  const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.18 }
    )

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <section className="hero">
        <div className="hero__veil" />
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />

        <div className="hero__content reveal">
          <span className="eyebrow">SAVE THE DATE</span>
          <img className="brand" src={asset('logo.png')} alt="Laís Gentil XV" />

          <div className="date-mark" aria-label="23 de janeiro de 2027">
            <span className="date-mark__day">23</span>
            <span className="date-mark__divider" />
            <div>
              <span className="date-mark__month">JANEIRO</span>
              <span className="date-mark__year">2027</span>
            </div>
          </div>

          <p className="hero__note">Uma noite para guardar para sempre.</p>

          <a className="scroll-cue" href="#detalhes" aria-label="Ver detalhes do evento">
            <span>detalhes</span>
            <span className="scroll-cue__line" />
          </a>
        </div>
      </section>

      <section className="details" id="detalhes">
        <div className="details__ornament details__ornament--left" />
        <div className="details__ornament details__ornament--right" />

        <div className="details__inner">
          <div className="details__intro reveal-on-scroll">
            <Sparkles size={18} strokeWidth={1.4} />
            <span>Laís Gentil celebra seus 15 anos</span>
            <Sparkles size={18} strokeWidth={1.4} />
          </div>

          <h1 className="details__title reveal-on-scroll">Reserve essa data</h1>
          <p className="details__copy reveal-on-scroll">
            Em breve, um novo capítulo começa. Você faz parte dessa história.
          </p>

          <div className="info-grid reveal-on-scroll">
            <article className="info-card">
              <CalendarDays size={26} strokeWidth={1.35} />
              <span className="info-card__label">Data</span>
              <strong>23 de janeiro de 2027</strong>
            </article>

            <article className="info-card info-card--featured">
              <span className="mini-xv">XV</span>
              <span className="info-card__label">Local</span>
              <strong>Espaço Maravilha Festas</strong>
            </article>

            <article className="info-card">
              <Clock3 size={26} strokeWidth={1.35} />
              <span className="info-card__label">Horário</span>
              <strong>21 horas</strong>
            </article>
          </div>

          <div className="closing reveal-on-scroll">
            <span className="closing__line" />
            <p>23 • 01 • 2027</p>
            <span className="closing__line" />
          </div>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
