import Image from "next/image";

const AddPost = () => {
  return (
    <div className=" p-4 bg-white shadow-md text-sm rounded-lg flex gap-4 justify-between">
      {/* avatar */}
      <Image
        src="https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="h-12 w-12 object-cover rounded-full"
        width={48}
        height={48}
      ></Image>
      {/* post  */}
      <div className=" flex-1">
        {/* text input  */}
        <div className="flex gap-4">
          <textarea placeholder="what's on your mind ? " className=" flex-1 bg-slate-100 rounded-lg p-4"></textarea>
          <Image
            src="/emoji.png"
            alt=""
            className="h-5 w-5 cursor-pointer self-end"
            width={20}
            height={20}
          ></Image>
        </div>
        {/* post options  */}
        <div className="flex gap-4 items-center mt-4 text-gray-400 flex-wrap">
          <div className=" flex gap-2 items-center cursor-pointer">
          <Image
            src="/addimage.png"
            alt=""
            width={20}
            height={20}
          ></Image>
          Photos
          </div>
          <div className=" flex gap-2 items-center cursor-pointer">
          <Image
            src="/addVideo.png"
            alt=""
            width={20}
            height={20}
          ></Image>
          Video
          </div>
          <div className=" flex gap-2 items-center cursor-pointer">
          <Image
            src="/addevent.png"
            alt=""
            width={20}
            height={20}
          ></Image>
          Events
          </div>
          <div className=" flex gap-2 items-center cursor-pointer">
          <Image
            src="/poll.png"
            alt=""
            width={20}
            height={20}
          ></Image>
          Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
