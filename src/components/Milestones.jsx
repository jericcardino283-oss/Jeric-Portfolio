import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/motion'
import { highlights, certifications } from '../data'
import { Squiggle } from './Bits'
import Wave from './Wave'

/** Certificate wall and animated portfolio highlights. */
export default function Milestones() {
  const root = useRef(null)
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      root.current.querySelectorAll('.num-count').forEach((counter) => {
        counter.textContent = new Intl.NumberFormat('en-US').format(Number(counter.dataset.count))
      })
      gsap.set('.num-cell, .highlight-footer', { clearProps: 'all' })
      gsap.set('.num-line', { scaleX: 1 })
      return
    }

    gsap.utils.toArray('.squiggle path', root.current).forEach((p) =>
      gsap.to(p, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: p, start: 'top 85%' } }))
    gsap.from('.cert-frame', { y: 50, rotate: (i) => (i % 2 ? 8 : -8), opacity: 0, stagger: 0.06, duration: 0.9, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.ms-wall', start: 'top 85%' } })

    const tl = gsap.timeline({ scrollTrigger: { trigger: '.nums', start: 'top 82%', once: true } })
    tl.from('.num-cell', { y: 32, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power2.out' })
    root.current.querySelectorAll('.num-count').forEach((element) => {
      const counter = { value: 0 }
      tl.to(counter, {
        value: Number(element.dataset.count),
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          element.textContent = new Intl.NumberFormat('en-US').format(Math.round(counter.value))
        },
      }, 0.15)
    })
    tl.fromTo('.num-line', { scaleX: 0 }, { scaleX: 1, stagger: 0.12, duration: 1.5, ease: 'power2.out' }, 0.15)
  }, { scope: root })

  return (
    <section className="milestones section" id="milestones" ref={root}>
      <Wave flip />
      <div className="wrap">
        <div className="sec-head center">
          <span className="pill">Milestones</span>
          <h2 className="h2">Certificate <span className="hl">wall<Squiggle /></span></h2>
        </div>
        <div className="ms-wall">
          {certifications.map((certificate, i) => (
            <figure className="cert-frame" key={certificate.title} style={{ '--r': `${[-2, 1.5, -1, 2][i % 4]}deg` }}>
              <a className="cert-border" href={`${import.meta.env.BASE_URL}${certificate.image}`} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title} certificate`}>
                <img
                  className={`cert-image${certificate.orientation === 'landscape' ? ' cert-image-landscape' : ''}`}
                  src={`${import.meta.env.BASE_URL}${certificate.image}`}
                  alt={certificate.title}
                  loading="lazy"
                />
                <b>{certificate.title}</b>
                <span className="cert-by">{certificate.issuer}</span>
                <span className="cert-seal">✓</span>
              </a>
            </figure>
          ))}
        </div>

        <div className="sec-head center ms-nums-head">
          <h2 className="h2">Highlights</h2>
        </div>
        <div className="nums">
          {highlights.map((s) => (
            <div className="num-cell" key={s.label}>
              <div className="num-val">
                <span className="num-count" data-count={s.value} aria-label={new Intl.NumberFormat('en-US').format(s.value)}>0</span>
                <small>{s.suffix}</small>
              </div>
              <i className="num-line" />
              <b className="num-label">{s.label}</b>
              {s.link ? (
                <a className="num-note highlight-note" href={s.link} target="_blank" rel="noreferrer">{s.note}</a>
              ) : (
                <span className="num-note highlight-note">{s.note}</span>
              )}
            </div>
          ))}
        </div>
        <p className="highlight-footer">Open to internships <span>·</span> Java <span>·</span> Flutter <span>·</span> Dart <span>·</span> MySQL <span>·</span> Website <span>·</span> UI/UX Design</p>
      </div>
    </section>
  )
}
