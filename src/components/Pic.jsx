import { useState } from 'react'

const base = import.meta.env.BASE_URL

// A polaroid-style photo. Shows a labelled placeholder until the image file exists.
export default function Pic({ file, label, ratio = 4 / 3, rot = 0, fit = 'cover', position = 'center', className = '' }) {
  const [ok, setOk] = useState(true)
  return (
    <figure
      className={`bg-mist rounded-md p-2.5 sm:p-3 shadow-[0_10px_28px_rgba(0,0,0,0.16)] ${className}`}
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <div className="overflow-hidden rounded-[3px] bg-slot" style={{ aspectRatio: ratio }}>
        {ok ? (
          <img
            src={`${base}images/${file}`}
            alt={label}
            loading="lazy"
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
