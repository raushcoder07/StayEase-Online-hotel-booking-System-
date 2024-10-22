import Image from "next/image";
import Link from "next/link";
;

const Hotel = ({ e }) => {
  return (
    <div className=" border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={"https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"}
          alt="hotel"
           width={200}
          height={200}
          className=" w-96 h-60 mr-3"
        />
        <div className="flex flex-col justify-between">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={"https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" w-28 h-16 object-cover  "
                  />
                );
              })
            : ""}
        </div>
        <div className=" ml-20">
          <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
          <p className=" text-justify my-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus mollitia consectetur officiis? Ad amet harum autem consequuntur itaque veniam cupiditate.</p>
          <div className=" text-2xl my-5">
            <span className=" font-bold">Facilities : </span>
            <ul className=" flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mr-10 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex items-center">
            <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : &#8377; {4500}
            </button>
            <Link
              href={`/hotels/2}`}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
