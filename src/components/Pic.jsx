import { useState } from 'react'

const base = import.meta.env.BASE_URL

// A polaroid-style photo that straightens and lifts on hover.
// Shows a labelled placeholder if the image file is missing.
export default function Pic({ file, label, ratio = 4 / 3, rot = 0, fit = 'cover', position = 'center', className = '', style }) {
  const [ok, setOk] = useState(true)
  return (
    <figure
      className={`polaroid bg-mist rounded-md p-2.5 sm:p-3 ${className}`}
      style={{ '--rot': `${rot}deg`, ...style }}
    >
      <div className="overflow-hidden rounded-[3px] bg-slot" style={{ aspectRatio: ratio }}>
        {ok ? (
          <img
            src={`${base}images/${file}`}
            alt={label}
            loading="lazy"
            decoding="async"
            onError={() => setOk(false)}
            className="h-full w-full"
            style={{ objectFit: fit, objectPosition: position }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-3 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
            {label}
          </div>
        )}
      </div>
    </figure>
  )
}
