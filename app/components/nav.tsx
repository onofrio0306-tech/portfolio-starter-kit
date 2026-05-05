import Link from 'next/link'

const navItems = {
  '/': { name: 'Home' },
  '/certifications': { name: 'Certifications' },
  '/resume': { name: 'Resume' },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start px-0 pb-0">
          <div className="flex flex-row space-x-2 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="px-3 py-1 rounded-md transition-all hover:bg-neutral-800 hover:text-white"
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
