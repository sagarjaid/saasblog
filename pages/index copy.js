import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='bg-gradient-to-t text-center from-slate-100 via-slate-100 to-green-500'>
      <main className="m-auto flex max-w-5xl gap-6 items-center flex-col">
        <nav className="flex w-full items-center justify-between p-4">
          <img src="/logo.png" className="w-[120px]" />
          <div className="flex items-center gap-1 justify-around rounded-full bg-black p-1.5 px-4 text-white">
            <a href="/" className='text-sm' >get early access</a>
            <svg
              className="w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </nav>
        <div className='flex flex-col items-center pt-20 text-base font-extrabold xs:text-2xl sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl '>
          <div>
            Simple & Modern WordPress
          </div>
          {/* <div className='flex gap-3'> */}
          <div>  blog Alternative for</div>
          <div className="text-rose-600">
            <Typewriter
              options={{
                strings: [
                  'Indie Hackers',
                  'SaaS Startups',
                  "Bloggers",
                  "Business"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          {/* </div> */}
        </div>
        <p className="text-center text-xs sm:text-base">Create a blog in 30 sec*</p>
        <div className="flex w-fit items-center justify-center rounded-full bg-rose-600 p-2 px-4	text-white shadow-xl hover:bg-rose-700 ">
          <a href="/ai-tools">get early access</a>
          <svg
            className="w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-1 text-center  text-gray-600 sm:text-base">
          <span className='text-xs'>✓ No credit card required</span>
          <span className='text-xs'>✓ No login is required</span>
        </div>
        <img src="/banner.gif" className="object-cover" />
      </main>
      {/* <img src="/hero-2.png" className="object-cover" /> */}
    </div>
  )
}

export default Home