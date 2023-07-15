import SEOMeta from '@/components/SEOMeta';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <SEOMeta
        title="SaaSblog - Simple & Modern blog for your SaaS/Business"
        description="A WordPress blog Alternative for SaaS Startups, Indie hackers, Businesses and Bloggers"
      />
      <div className='flex flex-col gap-8 md:gap-16 items-center bg-gradient-to-t from-white via-white to-green-300'>
        <main className="flex max-w-6xl gap-6 items-center flex-col w-full">
          <nav className="flex w-full items-center justify-between px-4 py-5">
            <img src="/saaslogo-2.png" className="w-[150px]" />
            <a href='https://sagarjaid.gumroad.com/l/saasblog' target="_blank" className="flex font-semibold items-center gap-1 justify-around rounded-full bg-black p-1.5 px-5 text-white hover:shadow-md">
              <span>$49/lifetime</span>
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
            </a>
          </nav>
          <div className='flex flex-col items-center pt-16 text-base font-extrabold xs:text-2xl sdm:text-3xl sm:gap-4 md:text-4xl mdx:text-5xl '>
            <div>
              A Simple Blogging Platform
            </div>
            <div>tailored Specifically for</div>
            <div className="text-rose-600">
              <Typewriter
                options={{
                  strings: [
                    'SaaS Startups',
                    "Businesses",
                    'Indie Hackers'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <p className="text-center text-xs sm:text-base">Create a blog in 30 seconds</p>
          <a href='https://tally.so/r/mVj71v' className="flex w-fit items-center justify-center rounded-full bg-rose-600 p-2 px-4	text-white shadow-xl hover:bg-rose-700 ">
            <span>get early access</span>
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
          </a>
          <div className="flex flex-col items-center gap-1 text-center  text-gray-600 sm:text-base">
            <span className='text-xs'>✓ No credit card required</span>
            <span className='text-xs'>✓ No login is required</span>
          </div>
        </main>
        <img src="/saasblog-hero.svg" className="object-cover w-full md:max-w-6xl pt-0 md:p-6" />
        <div className="flex max-w-2xl gap-16 md:items-start flex-col w-full p-6 mdx:p-2">
          <div className='flex flex-col items-center md:items-start md:flex-row gap-6 max-w-6xl'>
            <div className='font-bold text-xl pt-5'>Features</div>
            <div className='flex flex-col w-[300px] border-2 border-green-500 rounded-xl gap-3 p-4 px-6'>
              <span className="font-bold text-green-600">Under Development</span>
              <span>Super fast</span>
              <span>list blogs</span>
              <span>Keep it simple!</span>
              <span>Modern Dashboard</span>
              <span>Connect your own domain</span>
              <span> FREE SSL & CDN</span>
              <span> Mobile friendly UI</span>
              <span>No-Code Required</span>
            </div>
            <div className='hidden md:flex flex-col gap-3 p-4 px-6 text-gray-400'>
              <span>Coming soon</span>
              <span>AI SEO title and description</span>
              <span>Auto Table of Contents</span>
              <span>Auto-gen Feature Image</span>
              <span>AI auto generate tags</span>
              <span>Built in Opt-in form</span>
              <span>Auto sitemaps & robots.txt</span>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start md:flex-row justify-start max-w-6xl gap-6'>
            <div className='font-bold text-xl pt-5'>Pricing</div>
            <div className='flex max-w-sm text-white flex-col shadow-sm bg-rose-500  rounded-3xl gap-4 p-6'>
              <span className="font-bold text-xl">Pre-book your lifetime deal</span>
              <span>Basic blog</span>
              <span>Modern Dashboard</span>
              <span>Connect your own domain</span>
              <span>FREE SSL & CDN</span>
              <span>Mobile friendly UI</span>
              <span>No-Code Required</span>
              <a href='https://sagarjaid.gumroad.com/l/saasblog' className="flex w-fit font-semibold items-center justify-center rounded-full bg-white p-1.5 px-4	text-black hover:scale-105 ">
                $49/lifetime
              </a>
              <span className='text-[8px]'>You will be sing-up for early beta which is expected to live on 30 August 2023 and bugs are expected in first few versions</span>
            </div>
          </div>

          <div>
            <div className='text-sm flex flex-col font-medium gap-6 border p-6 w-full rounded-3xl bg-gradient-to-b from-white via-white to-green-100 '>
              <div className='text-lg font-bold text-green-600'>Dear founders,</div>
              <span> As a SaaS founders, we have to wear multiple hats, and one of those hats is growing our SaaS to thousands of users. </span>

              <span> I know how hard it can be. I understand the blood, sweat, and tears that go into building and growing a SaaS startup. </span>

              <span> The late nights spent coding and the continuous search for product-market fit - I've been there, I'm there. </span>

              <span>  At Saasblog.ai, my mission is to provide you with a simple, modern, and SEO-friendly blogging platform tailored specifically for SaaS startups. </span>

              <span> We are designing Saasblog with you in mind, knowing that your time is precious and your focus should be on building and scaling your business. </span>

              <span> Not struggling with complex blogging tools, and we promise you won't have to worry about SSL, page loading speed optimization, hosting, and maintenance. </span>

              <span>  Saasblog is more than just a blogging platform. It's a community of like-minded individuals like you. </span>

              <span> When you succeed, we celebrate. We are here to listen, learn, and adapt to your needs. </span>

              <span> Constantly improving our platform based on your feedback. </span>

              <span> Join Saasblog - the blogging platform built with SaaS founders in mind. </span>

              <span> I hope this letter finds you well, filled with passion. </span>

              <span>  With gratitude  </span>

              <div>
                <div className='flex gap-4 items-center'>
                  <img src="/sagar.png" className="w-16" />
                  <div className='flex flex-col'>
                    <span className='font-bold text-base'>Sagar Jaid</span>
                    <span>founder at Saasblog</span>
                    <span className='flex gap-2 mt-1'>
                      <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
                        <img className="w-4 h-4" src="./linkedin.png" />
                      </a>
                      <a
                        href="https://twitter.com/jaid_sagar"
                        target="_blank"
                        className="pt-0.5"
                      >
                        <img className="w-[17px] h-[17px]" src="./twitter.png" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center m-auto gap-6  mb-10'>
            <div className='flex justify-center items-center m-auto max-w-4xl gap-8'>
              <div className='flex items-center max-w-lg flex-col shadow-md bg-rose-500 text-white  rounded-3xl gap-3 p-8'>
                <div className="font-bold text-xl">Pre-book your lifetime deal</div>
                <div className='text-xs text-center'>You will be sing-up for early beta which is expected to live on 30 August 2023 and bugs are expected in first few versions</div>
                <a href='https://sagarjaid.gumroad.com/l/saasblog' className="flex w-fit font-semibold items-center justify-center rounded-full bg-white p-1.5 px-4	text-black hover:scale-105 ">
                  $49/lifetime
                </a>
              </div>
            </div>

            <div className='flex flex-col text-xl font-semibold gap-6 justify-center items-center'>
              <div>Or</div>
              <div>Give us Shootout!</div>
              <div className='flex gap-6'>
                <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
                  <img className="w-8" src="./linkedin-dark.png" />
                </a>
                <a
                  href="https://twitter.com/jaid_sagar"
                  target="_blank"
                // className="pt-0.5"
                >
                  <img className="w-10" src="./twitter-dark.png" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='text-xs flex gap-1 items-center justify-center p-6'><span>made in </span><img className="w-2.5" src="./love.png" /> <span>with Saas</span></div>

      </div >
    </>
  )
}

export default Home