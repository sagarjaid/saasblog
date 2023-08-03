const SidebarMenu = () => {
    return (
        <nav className="flex flex-col justify-between w-[250px] p-4 hover border-r border-gray-100 h-screen">
            <div className=" flex flex-col gap-3">
                <img src="/saaslogo-2.png" className="w-[130px] p-2 " />

                <div className=" flex gap-2 hover:bg-stone-50 w-full px-2 py-1 rounded-md cursor-pointer">
                    <svg className="w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                    </svg>
                    <div>
                        Dashboard
                    </div>
                </div>

                <div className=" flex gap-2 hover:bg-stone-50 w-full px-2 py-1 rounded-md cursor-pointer">
                    <svg className="w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <div>
                        View Site
                    </div>
                </div>

                <div className="flex flex-col gap-2">

                    <div className=" flex gap-2 items-start hover:bg-stone-50 w-full px-2 py-1 rounded-md cursor-pointer">
                        <svg className="w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                        </svg>
                        <div className="flex flex-col">
                            <div>Posts</div>
                        </div>
                    </div>

                    <div className="pl-8  hover:bg-stone-50 w-full px-2 py-1 rounded-md cursor-pointer">Add Post</div>
                    <div className="pl-8 hover:bg-stone-50 w-full px-2 py-1 rounded-md cursor-pointer">Categories</div>
                    <div className="pl-8  hover:bg-stone-50 w-full px-2 py-1 rounded-md cursor-pointer">Tags</div>
                </div>
            </div>
            <div className=" flex gap-2 items-center w-full px-2 py-1 cursor-pointer">
                <div className="group w-full relative flex cursor-pointer">
                    <div className="flex w-full gap-3 border cursor-pointer items-center text-xs rounded-md p-1 px-2">
                        <img
                            src="/favicon.png"
                            className="w-[25px] rounded-full"
                        />
                        <div className="flex gap-1 flex-col cursor-pointer">
                            <span className="text-[8px] font-semibold leading-none">
                                userName
                            </span>
                            <span className="text-[7px] leading-none"> email@gmail.com"</span>
                        </div>
                    </div>
                    <span
                        onClick={""}
                        className="absolute w-full text-center rounded-md bg-gray-900 p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                        Logout
                    </span>
                </div>
                <svg className="w-9 p-1 hover:bg-stone-100 rounded-md " fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
        </nav>

    );
};

export default SidebarMenu;
