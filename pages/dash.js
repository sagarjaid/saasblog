import SidebarMenu from "@/components/SidebarMenu";

const Dash = () => {
  return (
    <div className="flex text-gray-800">
      <SidebarMenu />
      <div className="p-6 flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Dashboard</h1>

          <div className="border bg-gray-900 w-[100px] text-white cursor-pointer border-gray-900 text-center p-1 px-2   rounded-lg">
            New Post
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-10">
          {/* <div className="flex gap-4">
            <div className="flex flex-col w-full justify-center items-center border py-20 bg-green-200 rounded-lg gap-6">
              <img src="/cel.png" className="w-24 p-2 " />
              <div className="text-2xl font-bold">Welcome to Saasblog</div>
              <div className="border cursor-pointer border-black rounded-lg p-2">
                <div>Just Installed @Saasblog! 🚀</div>
              </div>
              <img
                src="/twitter-dark.png"
                className="relative -top-10 w-10 p-2 "
              />
            </div>
            <div className="flex flex-col border rounded-lg p-4 w-[335px]">
              <div className="font-bold ">Setup steps</div>
              <ul className="flex flex-col gap-2 item-center list-decimal	p-4	">
                <li>Name & tagline</li>
                <li>Upload logo</li>
                <li>Add custom domain</li>
                <li>Add category</li>
                <li>Add 1st blog post</li>
                <li>Setup SEO</li>
                <li>Go live!</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg p-4 w-full">
            <div className="font-bold ">Recent posts</div>
            <ul className="flex flex-col gap-4 item-center list-disc		p-4	">
              <li>
                The Ultimate Guide to Launching a SaaS Startup: From Idea to
                Execution
              </li>
              <li>
                Navigating Churn: Reducing Customer Turnover in Your SaaS
                Business
              </li>
              <li>The 5 Step Journey of a SaaS Startup</li>
              <li>Scaling New Heights: Strategies for Growing Your SaaS</li>
              <li>
                SaaS Sales Strategies: How to Acquire and Retain Customers for
                Your SaaS Startup
              </li>
            </ul>
          </div> */}

          {/* <div className="flex gap-4">
            <div className="flex flex-col border rounded-lg p-4 w-full">
              <div className="font-bold ">Recent posts</div>
              <ul className="flex flex-col gap-4 item-center list-disc		p-4	">
                <li>
                  The Ultimate Guide to Launching a SaaS Startup: From Idea to
                  Execution
                </li>
                <li>
                  Navigating Churn: Reducing Customer Turnover in Your SaaS
                  Business
                </li>
                <li>The 5 Step Journey of a SaaS Startup</li>
                <li>Scaling New Heights: Strategies for Growing Your SaaS</li>
                <li>
                  SaaS Sales Strategies: How to Acquire and Retain Customers for
                  Your SaaS Startup
                </li>
              </ul>
            </div>
            <div className="flex flex-col border rounded-lg p-4 w-[335px]">
              <div className="font-bold ">Setup steps</div>
              <ul className="flex flex-col gap-2 item-center list-decimal	p-4	">
                <li>Name & tagline</li>
                <li>Upload logo</li>
                <li>Add custom domain</li>
                <li>Add category</li>
                <li>Add 1st blog post</li>
                <li>Setup SEO</li>
                <li>Go live!</li>
              </ul>
            </div>
          </div> */}

          <div className="flex gap-4">
            <div className="flex flex-col w-full justify-center items-center border py-20 bg-green-200 rounded-lg gap-6">
              <img src="/cel.png" className="w-24 p-2 " />
              <div className="text-2xl font-bold">Welcome to Saasblog</div>
              <div className="border cursor-pointer border-black rounded-lg p-2">
                <div>Just Installed @Saasblog! 🚀</div>
              </div>
              <img
                src="/twitter-dark.png"
                className="relative -top-10 w-10 p-2 "
              />
            </div>
            <div className="flex flex-col border rounded-lg p-4 w-[335px]">
              <div className="font-bold ">Setup steps</div>
              <ul className="flex flex-col gap-2 item-center list-decimal	p-4	">
                <li>Name & tagline</li>
                <li>Upload logo</li>
                <li>Add custom domain</li>
                <li>Add category</li>
                <li>Add 1st blog post</li>
                <li>Setup SEO</li>
                <li>Go live!</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg p-4 w-full">
            <div className="font-bold ">Recent posts</div>
            <ul className="flex flex-col gap-4 item-center list-disc		p-4	">
              <li>
                Hello World!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
