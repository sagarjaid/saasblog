import React from 'react';

const Done = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-6'>
      <div className='text-5xl font-bold'>Thank you!</div>
      <div>I'm #buildinpublic, help me spread the word</div>
      <div className='flex items-center gap-1 justify-around rounded-full bg-green-600 p-1.5 px-4 text-white'>
        <a
          href='https://twitter.com/jaid_sagar'
          target="_blank"
          className='text-sm'>
          Follow us on Twitter
        </a>
        <svg
          className='w-5'
          fill='none'
          stroke='currentColor'
          strokeWidth={1.5}
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
          />
        </svg>
      </div>
    </div>
  );
};

export default Done;
