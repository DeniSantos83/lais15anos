import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { CalendarDays, Clock3, Sparkles } from 'lucide-react'
import './style.css'

function App() {
  const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.18 }
    )
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <section
        className="hero"
        style={{ '--hero-art': `url("${asset('Fundos (3) (1).png')}")` }}
        aria-label="Save the date — Laís Gentil XV"
      >
        <div className="hero__center">
          <span className="hero__eyebrow">SAVE THE DATE</span>
          <img className="hero__logo" src={asset('LogotipoSemEfeito.png')} alt="Laís Gentil XV" />
          <p>Uma noite para guardar para sempre.</p>
        </div>
        <a className="hero__details-link" href="#detalhes" aria-label="Ver detalhes do evento">Ver detalhes</a>
      </section>

      <section
        className="details"
        id="detalhes"
        style={{ '--details-art': `url("${asset('Fundos (1) (1).png')}")` }}
      >
        <img className="floating-petal floating-petal--left" src={asset('PetálaFluida (1) (1).png')} alt="" aria-hidden="true" />
        <img className="floating-petal floating-petal--right" src={asset('PetálaFluida (1) (1).png')} alt="" aria-hidden="true" />
        <div className="details__inner">
          <div className="details__intro reveal-on-scroll"><Sparkles size={18} strokeWidth={1.4} /><span>Laís Gentil celebra seus 15 anos</span><Sparkles size={18} strokeWidth={1.4} /></div>
          <h1 className="details__title reveal-on-scroll">Reserve essa data</h1>
          <p className="details__copy reveal-on-scroll">Em breve, um novo capítulo começa. Você faz parte dessa história.</p>
          <div className="info-grid reveal-on-scroll">
            <article className="info-card"><CalendarDays size={26} strokeWidth={1.35} /><span className="info-card__label">Data</span><strong>23 de janeiro de 2027</strong></article>
            <article className="info-card info-card--featured"><img className="mini-monogram" src={asset('MonogramaSemEfeito.png')} alt="XV" /><span className="info-card__label">Local</span><strong>Espaço Maravilha Festas</strong></article>
            <article className="info-card"><Clock3 size={26} strokeWidth={1.35} /><span className="info-card__label">Horário</span><strong>21 horas</strong></article>
          </div>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
