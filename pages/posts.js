import SidebarMenu from "@/components/SidebarMenu";

const Posts = () => {
    return (
        <div className="flex text-gray-800">
            <SidebarMenu />
            <div className="p-6 flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold ">
                        Posts
                    </h1>

                    <div className="border bg-gray-900 w-[100px] text-white cursor-pointer border-gray-900 text-center p-1 px-2 rounded-md">New Post</div>
                    
                </div>

                <div className="flex flex-col gap-4 pt-10">

                    <div className="flex text-xs justify-between">
                        <div>
                            TITLE
                        </div>
                        <div className=" w-[100px] flex justify-start" >
                        STATUS
                        </div>
                    </div>

                    <div className="flex justify-between border-t py-4 items-center">
                         <div className=" flex flex-col gap-2 pr-4">
                         <div>The Ultimate Guide to Launching a SaaS Startup: From Idea to Execution</div>
                            <div className="flex gap-2 text-xs">
                                <div>Author: Sagar Jaid</div>
                                <div>2 Days ago</div>
                            </div>
                        </div>
                        <div className=" w-[100px] flex justify-start" >
                            <div className=" w-max py-1 px-3 bg-green-200 text-xs text-green-400 rounded-full">PUBLISHED</div>
                        </div>
                    </div>

                    <div className="flex justify-between border-t py-4 items-center">
                        <div className=" flex flex-col gap-2 pr-4">
                            <div>Navigating Churn: Reducing Customer Turnover in Your SaaS Business</div>
                            <div className="flex gap-2 text-xs">
                                <div>Author: Sagar Jaid</div>
                                <div>2 Days ago</div>
                            </div>
                        </div>
                        <div className=" w-[100px] flex justify-start" >
                            <div className=" w-max py-1 px-3 bg-blue-200 text-xs text-blue-400 rounded-full">SCHEDULED</div>
                        </div>
                    </div>

                    <div className="flex justify-between border-t py-4 items-center">
                        <div className=" flex flex-col gap-2 pr-4">
                            <div>The 5 Step Journey of a SaaS Startup</div>
                            <div className="flex gap-2 text-xs">
                                <div>Author: Sagar Jaid</div>
                                <div>2 Days ago</div>
                            </div>
                        </div>
                        <div className=" w-[100px] flex justify-start" >
                            <div className=" w-max py-1 px-3 bg-gray-200 text-xs text-gray-400 rounded-full">DAFT</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Posts;
