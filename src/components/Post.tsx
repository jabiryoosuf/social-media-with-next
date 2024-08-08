import Image from "next/image";
import Comment from "./Comment";

const Post = () => {
  return (
    <div className=" flex flex-col gap-4">
      {/* user  */}
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/15469881/pexels-photo-15469881/free-photo-of-farmer-working-in-the-field-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">jabir</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* desc  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/27297965/pexels-photo-27297965/free-photo-of-a-surfer-rides-a-wave-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="rounded-md object-cover"
            fill
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem
          similique expedita, saepe voluptate, cum consectetur quod nesciunt
          amet magnam ex esse accusamus sint harum?
        </p>
      </div>
      {/* interaction  */}
      <div className="flex items-center justify-between my-4 text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              className="cursor-pointer"
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123 <span className="hidden md:inline">Likes</span></span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              className="cursor-pointer"
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123 <span className="hidden md:inline">Comments</span></span>
          </div>
        </div>
        <div>
            <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              className="cursor-pointer"
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123 <span className="hidden md:inline">Shares</span></span>
          </div>
        </div>
      </div>
      <Comment/>
    </div>
  );
};

export default Post;
