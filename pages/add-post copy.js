import SidebarMenu from "@/components/SidebarMenu";

const AddPost = () => {
  return (
    <div className="flex text-gray-800">
      <SidebarMenu />
      <div className="p-6 flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Add New Post</h1>

          {/* <div className="border bg-gray-900 w-[160px] text-white cursor-pointer border-gray-900 text-center p-1 px-2 rounded-md">
            Add New Category
          </div> */}

          <div className="border bg-gray-900 w-[100px] text-white cursor-pointer border-gray-900 text-center p-1 px-2 rounded-md">New Post</div>

        </div>

        <div className="flex flex-col gap-4 pt-10">
          <div className="flex  justify-between gap-4">
            <div className=" w-full flex flex-col p-4 border gap-2 rounded-lg ">

              <div className="flex w-full flex-col gap-1 text-sm">
                <input
                  onChange={""}
                  value={""}
                  placeholder="Post Title"
                  type="text"
                  className="border w-full border-gray-300 rounded-lg p-2"
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
                <label className="font-bold">SEO Description</label>
                <textarea
                  // rows="6"
                  value={""}
                  className="border h-[50vh] border-gray-300 rounded-lg p-2"
                />
              </div>

              <label className="font-bold">SEO Data</label>

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

            <div className="w-[800px] flex flex-col gap-6  ">
              <div className="flex flex-col gap-6 p-4 border rounded-lg">
                <label className="font-bold">Category</label>
                <div className="flex flex-col gap-1 text-sm">
                  <label className="font-bold">Name</label>
                  <input
                    onChange={""}
                    value={""}
                    type="text"
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 p-4 border rounded-lg">
                <label className="font-bold">Tags</label>
                <div className="flex flex-col gap-1 text-sm">
                  <label className="font-bold">Name</label>
                  <input
                    onChange={""}
                    value={""}
                    type="text"
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
