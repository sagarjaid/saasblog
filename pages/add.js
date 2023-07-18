import React, { useState } from 'react';



const Add = () => {

    const [blogName, setblogName] = useState('');
    const [projectId, setProjectId] = useState();
    const [err, setErr] = useState(false);
    const [url, setUrl] = useState('');




    const handleInput = (e) => {
        setblogName(e.target.value);
        console.log(e.target.value);
    };

    // const createBlog = async () => {
    //     console.log("blog got called");

    //     const response = await fetch('/api/getBlogURL', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(blogName)
    //     });

    //     const data = await response?.json()

    //     console.log(data, "data");

    //     const newData = data.aliases.slice(-1)

    //     setUrl(newData.alias)
    // }

    const createBlog = async () => {
        console.log("blog got called");

        const response = await fetch('/api/getBlogURL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogName)
        });

        const data = await response?.json()

        console.log(data, "data");

        const pId = data.projectId

        setProjectId(pId)
    }

    const getURL = async () => {

        console.log("blog got called");

        const response = await fetch('/api/getURL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectId)
        });

        const Resdata = await response?.json()

        console.log(Resdata, "Resdata");

        if (Resdata?.aliases?.length > 0) {
            const data = Resdata.aliases

            const shortestAlias = data.reduce((shortest, obj) => {
                if (!shortest || obj.alias.length < shortest.length) {
                    return obj.alias;
                }
                return shortest;
            }, null);

            console.log(shortestAlias);

            setUrl(shortestAlias)
        } else {
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 5000);
        }

    }

    return (
        <div className='flex flex-col justify-center items-center m-auto h-screen gap-6 w-96 max-w-sd'>
            <div>create your blog</div>
            <input
                type='text'
                value={blogName}
                onChange={handleInput}
                className='border p-2 rounded-md border-black placeholder:text-xs'
            />
            <button
                className='border p-2 rounded-xl border-black cursor-pointer'
                onClick={createBlog}>
                Deploy
            </button>

            {projectId &&
                <button
                    className='border p-2 rounded-xl border-black cursor-pointer'
                    onClick={getURL}>
                    getURL
                </button>
            }
            {err && <div>Try Again after 30 sec</div>}

            {url && <a href={`https://${url}`} target="_blank" className="cursor-pointer underline text-blue-500">{url}</a>}

        </div>


    );
};



export default Add