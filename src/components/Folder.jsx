const PATH =
  'M 0 22 C 0 10 10 0 22 0 L 120 0 L 150 34 L 408 34 C 420 34 430 44 430 56 L 430 168 C 430 180 420 190 408 190 L 22 190 C 10 190 0 180 0 168 Z'

// A folder tab that scrolls to its project section, like the folder stack in the design.
export default function Folder({ href, title, sub, dark = false, offset = false }) {
  return (
    <a
      href={href}
      className={`group relative block w-full max-w-[430px] transition-transform duration-300 ease-out hover:-translate-y-2 hover:rotate-[-1deg] [&:not(:first-child)]:-mt-8 ${
        offset ? 'sm:translate-x-8' : ''
      }`}
    >
      <svg viewBox="0 0 430 190" className="w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)]" aria-hidden="true">
        <path d={PATH} className={dark ? 'fill-ink' : 'fill-pink'} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-6 text-center text-white">
        <span className="text-xl font-semibold sm:text-2xl">{title}</span>
        <span className="text-xs opacity-90 sm:text-sm">{sub}</span>
      </div>
    </a>
  )
}
