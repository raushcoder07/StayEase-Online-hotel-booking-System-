import React from 'react'
import Image from 'next/image'
import Blocks from './Blocks'
import Link from 'next/link';
const Header1 = () => {
    return (
        <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className=" w-28 h-28 "
          />
          <div className=" h-full flex">
            <Blocks title={"Become a member"} para={"Additional 0% off on stays."} />
            <Blocks
              title={"OYO for business"}
              para={"Trusted by 5000 corporates."}
            />
            {/* <Blocks title={"List your property"} para={"Start earning in 30 min."} /> */}
            <Blocks title={"987654321"} para={"Call us to book now."} />
            <div className="flex items-center px-3 ">
              <Image
                src={"/demo.svg"}
                alt="demo"
                width={200}
                height={200}
                className=" w-10 h-10 rounded-full mr-5"
              />
              <h3 className='font-bold' >
              <Link href={"/login"} className=" font-bold">
                  Login / Signup
                </Link>
              </h3>
              
              {/* {auth ? (
                <h3
                  className=" font-bold cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </h3>
              ) : (
                <Link href={"/login"} className=" font-bold">
                  Login / Signup
                </Link>
              )} */}
            </div>
          </div>
        </div>
      );
    };
    
    export default Header1;
