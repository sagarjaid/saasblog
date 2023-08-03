import SidebarMenu from "@/components/SidebarMenu";

const Dash = () => {
  return (
    <div className="flex text-gray-800">
      <SidebarMenu />
      <div className="p-6 flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Categories</h1>

          {/* <div className="border bg-gray-900 w-[160px] text-white cursor-pointer border-gray-900 text-center p-1 px-2 rounded-md">
            Add New Category
          </div> */}

          <input
            placeholder="Search Category"
            type="text"
            className="border w-[160px]  placeholder:text-xs border-gray-300 rounded-lg p-1 px-2"
          />
        </div>

        <div className="flex flex-col gap-4 pt-10">
          <div className="flex  justify-between gap-4">

            <div className="flex flex-col gap-6 w-2/5 p-4 border rounded-lg">
              <label className="font-bold">Add New Category</label>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-bold">Name</label>
                <input
                  onChange={""}
                  value={""}
                  type="text"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-bold">Slug URL</label>
                <input
                  onChange={""}
                  value={""}
                  type="text"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-bold">SEO Title</label>
                <input
                  onChange={""}
                  value={""}
                  type="text"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-bold">SEO Description</label>

                <textarea
                  rows="6"
                  value={""}
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="border bg-gray-900 w-fit text-white cursor-pointer border-gray-900 text-center p-1 px-2 rounded-md">
                Add Category
              </div>
            </div>

            <div className=" w-full flex flex-col p-4 pr-0 border gap-2 rounded-lg ">
              <div className="flex text-xs justify-between pb-2">
                <div>Name</div>
                <div className=" w-[150px] flex justify-start">Slug</div>
              </div>

              <div className="h-[520px] overflow-y-scroll">

          
              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">Uncategorized</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/uncategorized</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">Saas</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/micro-saas</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>


              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>


              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>


              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>


              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>




              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>


              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>


              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>

              <div className="flex justify-between border-t cursor-pointer hover:bg-stone-50 py-4 px-1  items-center">
                <div className="font-bold ">New</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/new</div>
                </div>
              </div>

              </div>

              {/* <div className="py-2 border-t ">
              <div className="flex justify-between cursor-pointer hover:bg-stone-50 hover:rounded-md p-2  items-center">
                <div className="font-bold ">Uncategorized</div>
                <div className=" w-[150px] flex justify-start">
                  <div className=" w-max text-xs">/Uncategorized</div>
                </div>
              </div>
              </div> */}
            </div>
          </div>

          {/* <div className="flex gap-2">
            <div className="flex flex-col border gap-1 rounded-lg p-4 w-full">
              <div className="font-bold ">Category URL Settings</div>
              <div className="text-sm">
                Choose the url style from below for category page
              </div>

              <div className="flex gap-2 text-sm p-1">
                <input
                  onChange={""}
                  value={""}
                  type="checkbox"
                  className="border border-gray-300 rounded-lg"
                />
                <label className="">Allow</label>
              </div>
              <div className="flex gap-2 text-sm p-1">
                <input
                  onChange={""}
                  value={""}
                  type="checkbox"
                  className="border border-gray-300 rounded-lg"
                />
                <label className="">Allow</label>
              </div>
            </div>

            <div className="flex flex-col border gap-1 rounded-lg p-4 w-full">
              <div className="font-bold ">Category SEO Settings</div>
              <div className="text-sm">
                Search engine viability of categories{" "}
              </div>

              <div className="flex gap-2 text-sm p-1">
                <input
                  onChange={""}
                  value={""}
                  type="checkbox"
                  className="border border-gray-300 rounded-lg "
                />
                <label className="">Allow</label>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col border gap-1 rounded-lg p-4 w-full">
              <div className="font-bold ">Category SEO Settings</div>
              <div className="text-sm">
                Search engine viability of categories{" "}
              </div>

              <div className="flex gap-2 text-sm p-1">
                <input
                  onChange={""}
                  value={""}
                  type="checkbox"
                  className="border border-gray-300 rounded-lg "
                />
                <label className="">Allow</label>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
