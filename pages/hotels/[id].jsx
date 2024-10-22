import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
      <Image
        src={
          "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
        }
        alt="hotel"
        width={200}
        height={200}
        className="w-full h-large-box my-5 mx-auto "
      />
      <div className="">
        <h3 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda
          quisquam quidem recusandae molestiae aliquid ducimus vitae tempor a
          inventore dignissimos.
        </h3>
        <p className="text-xl my-5 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus unde
          in quisquam. Officia perspiciatis necessitatibus in rem quis! Tenetur
          ratione nostrum, aut laborum eligendi accusamus et, cupiditate
          consequuntur accusantium expedita sit beatae laudantium mollitia
          voluptas incidunt debitis modi minima similique natus non? Cupiditate
          non natus repudiandae. Rem, exercitationem iste
        </p>
        <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
          Price : &#8377; {4500}
        </button>
        <p className="text-3xl font-bold my-5">Facilities :</p>
        <ul className=" flex text-xl  justify-between">
          <li>Swiming</li>
          <li>Dogs</li>
          <li>Loundary</li>
          <li>Breakfast</li>
          <li>Garden</li>
          <li>Sports</li>
        </ul>
        <button className=" w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
               Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
