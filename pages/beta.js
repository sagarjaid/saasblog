import React, { useState } from 'react';

const Beta = () => {
    const [err, setErr] = useState(false)

    const [Data, setData] = useState({
        fristName: '',
        lastName: '',
        email: '',
        phone: '',
        questionOne: '',
        questionTwo: '',
    });

    const handleFName = (e) => {
        setErr(false)
        setData({ ...Data, fristName: e.target.value });
    };
    const handleLName = (e) => {
        setErr(false)
        setData({ ...Data, lastName: e.target.value });
    };

    const handleEmail = (e) => {
        setErr(false)
        setData({ ...Data, email: e.target.value });
    };

    const handlePhone = (e) => {
        setErr(false)
        setData({ ...Data, phone: e.target.value });
    };

    const handleQuestionOne = (e) => {
        setErr(false)
        setData({ ...Data, questionOne: e.target.value });
    };

    const handleQuestionTwo = (e) => {
        setErr(false)
        setData({ ...Data, questionTwo: e.target.value });
    };

    const handleSubmit = () => {
        if (Data.email && Data.fristName) {

            let url =
                'https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/saasblogData/data';

            let body = {
                datum: Data,
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((response) => response.json())
                .then((json) => {
                    // Do something with object
                    console.log(json.datum, 'Data');
                });

            if (Data.questionOne == 'Yes') {
                console.log('Yes');
                window.location.href = "https://sagarjaid.gumroad.com/l/saasblog"
                setData({
                    fristName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    questionOne: '',
                    questionTwo: '',
                })
            } else {
                console.log('No');
                window.location.href = '/done'
                setData({
                    fristName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    questionOne: '',
                    questionTwo: '',
                })
            }

        } else {
            setErr(true)
        }
    };

    return (
        <div className='flex w-full bg-white h-screen'>
            <div className='hidden md:flex w-[35%] bg-green-300  justify-center items-center'></div>
            <div className='w-full max-w-sm bg-white flex flex-col justify-center p-8 gap-4 text-xs'>
                <img
                    src='/saaslogo.png'
                    className='w-[160px] mb-6'
                />

                <div className='text-2xl font-extrabold'>get early access</div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold'>First name</label>
                    <input
                        onChange={handleFName}
                        value={Data.fristName}
                        type='text'
                        className='border border-gray-600 rounded-lg p-2'
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='font-bold'>Last name</label>
                    <input
                        onChange={handleLName}
                        value={Data.lastName}
                        type='text'
                        className='border border-gray-600 rounded-lg p-2'
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='font-bold'>Email-id</label>
                    <input
                        onChange={handleEmail}
                        value={Data.email}
                        type='email'
                        className='border border-gray-600 rounded-lg p-2'
                    />
                </div>

                <div className='flex flex-col gap-1 '>
                    <label className='font-bold'>
                        Phone number <span className='text-xs'>(optional)</span>
                    </label>
                    <input
                        onChange={handlePhone}
                        value={Data.phone}
                        type='number'
                        className='border border-gray-600 rounded-lg p-2 placeholder:text-xs'
                        placeholder=''
                    />
                </div>

                <div className='flex flex-col gap-1 '>
                    <label className='font-bold'>
                        I would you like be a part of first #Super30 users
                    </label>
                    <select
                        className='w-full rounded-lg border border-gray-600 p-2  text-xs outline-none'
                        onChange={handleQuestionOne}>
                        <option>Select</option>
                        <option
                            value='Yes'>
                            Yes, I want $49 lifetime fully hosted blog deal!
                        </option>
                        <option value='No'>Nope!</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1 '>
                    <label className='font-bold'>
                        Which feature excites you the most?
                    </label>
                    <select
                        className='w-full rounded-lg border border-gray-600 p-2  text-xs outline-none'
                        onChange={handleQuestionTwo}>
                        <option>Select</option>
                        <option
                            value='Create a blog in 30 seconds'>
                            Create a blog in 30 seconds
                        </option>
                        <option value='No-Code Required'>No-Code Required</option>
                        <option value='Modern Dashboard'>Modern Dashboard</option>

                        <option value='Clean & minimalist blog'>
                            Clean & minimalist blog
                        </option>
                        <option value='Super-fast & SEO friendly'>
                            Super-fast & SEO friendly
                        </option>
                    </select>
                </div>
                {err && (
                    <div className="text-xs text-rose-600">
                        All fields are required except phone number
                    </div>
                )}
                <div
                    onClick={handleSubmit}
                    className='flex w-fit gap-2 items-center cursor-pointer justify-center rounded-full bg-green-700 p-2 px-4	text-white  hover:bg-green-600 '>
                    <span>get early access</span>
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
                <div className='text-[9px] text-gray-400'>
                    by signing up you acknowledge to be a part of close early beta of product which may contain bugs.
                </div>
            </div>
        </div>
    );
};

export default Beta;
