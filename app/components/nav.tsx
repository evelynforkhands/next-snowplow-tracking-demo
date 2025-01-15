"use client";
import trackSelfDescribingEvent from 'lib/snowplow/trackCustomEvent'
import LinkClick, { LINK_CLICK_SCHEMA } from 'lib/snowplow/types/linkClick'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}
function handleLinkClick(
  { targetUrl, elementContent }: { targetUrl: string, elementContent: string }
) {
  const linkClickEvent: LinkClick = {
    schema: LINK_CLICK_SCHEMA,
    data: {
      targetUrl,
      elementContent,
    },
  };

  trackSelfDescribingEvent(linkClickEvent);
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  onClick={() => handleLinkClick({ targetUrl: path, elementContent: name })}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
