// Full-height page section with the soft swirl rings from the design behind it.
export default function Section({ id, nav, tinted = false, swirl = 'right', className = '', children }) {
  return (
    <section
      id={id}
      data-nav={nav}
      className={`relative flex items-center overflow-hidden py-20 sm:py-28 lg:min-h-screen ${tinted ? 'bg-[#fbfbfa]' : 'bg-white'} ${className}`}
    >
      <div className="swirl hidden h-[780px] w-[900px] rotate-[18deg] lg:block" style={swirl === 'right' ? { right: '-260px', top: '30%' } : { left: '-320px', top: '35%' }} />
      <div className="swirl hidden h-[620px] w-[520px] -rotate-[25deg] lg:block" style={swirl === 'right' ? { left: '-300px', top: '55%', borderWidth: 8 } : { right: '-240px', top: '10%', borderWidth: 8 }} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-10">{children}</div>
    </section>
  )
}

export function Title({ script, head, size = 'md' }) {
  const headSize = {
    xl: 'text-[clamp(3.2rem,14vw,7.5rem)] lg:text-[clamp(6rem,9vw,9.5rem)]',
    lg: 'text-[clamp(2.8rem,11vw,9rem)]',
    md: 'text-[clamp(2.2rem,9.5vw,5rem)] lg:text-[clamp(4rem,5.6vw,5.75rem)]',
  }[size]
  return (
    <div>
      <p className={`script relative z-10 -mb-[0.12em]-rotate-6 ${size === 'md' ? 'text-[clamp(1.9rem,6vw,5rem)]' : 'text-[clamp(2.4rem,7vw,6.5rem)]'}`}>{script}</p>
      <h2 className={`headline break-words ${headSize}`}>{head}</h2>
    </div>
  )
}
