import Image from "next/image";

const Comment = () => {
  return (
    <div className="">
      {/* write  */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/27025481/pexels-photo-27025481/free-photo-of-a-bride-and-groom-standing-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="rounded-full w-8 h-8"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1 "
          />
          <Image
            src="/emoji.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full w-8 h-8 "
          />
        </div>
      </div>
      {/* comments  */}
      <div>
        {/* comment  */}
        <div className="flex gap-4 justify-between mt-6">
          {/* avatar  */}
          <Image
            src="https://images.pexels.com/photos/27025481/pexels-photo-27025481/free-photo-of-a-bride-and-groom-standing-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
          {/* descrption  */}
          <div className="flex flex-col gap-2 flex-1">
            <span>Muhammed Jabir</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              atque, saepe quos tempore nesciunt, omnis veritatis dolores
              eligendi nisi, laboriosam sed sunt necessitatibus exercitationem
              cupiditate!
            </p>
            <div className=" flex gap-8 items-center text-xs text-gray-500 mt-2">
              <div className=" flex gap-4 items-center">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-3 h-3"
                ></Image>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* icon  */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Comment;
