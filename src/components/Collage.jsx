import Pic from './Pic.jsx'
import Reveal from './Reveal.jsx'

// Overlapping stack of polaroids, like the right-hand side of each project slide.
// Landscape shots take most of the width; tall phone screenshots sit narrow beside them.
export default function Collage({ pics }) {
  return (
    <div className="relative flex flex-col">
      {pics.map((pic, i) => {
        const tall = pic.ratio < 1
        const width = tall ? 'w-[42%] sm:w-[34%]' : i === 0 ? 'w-[92%]' : 'w-[80%]'
        const side = i % 2 === 0 ? 'self-end' : 'self-start'
        const overlap = i === 0 ? '' : tall ? '-mt-[38%]' : '-mt-[9%]'
        return (
          <Reveal key={pic.file + i} delay={i * 120} className={`${width} ${side} ${overlap}`} >
            <Pic {...pic} style={{ zIndex: i + 1, position: 'relative' }} />
          </Reveal>
        )
      })}
    </div>
  )
}
