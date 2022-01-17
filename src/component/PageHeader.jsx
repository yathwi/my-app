import React from "react";
import Image from "next/image";

class PageHeader extends React.Component {
  render() {
    const menulist=[
      {
        link:"about",
        name:"ABOUT"
      },
      {
        link:"skills"
        ,name:"SKILLS"
      },
      {
        link:"values",
        name:"VALUES"
      },
      {
        link:"future",
        name:"FUTURE"
      },
    ];
    
  return (
      <div className="mx-auto max-w-[90%]">
        <div className="flex justify-between items-center text-primary-dark">
          <div>
            <Image src="/logo.png" alt="logo" width={150} height={75} />
          </div>
          <div className="">  
            <ul className=" grid grid-cols-4 gap-4 ">
              <li className="">ABOUT</li>
              <li className="">SKILLS</li>
              <li className="">VALUES</li>
              <li className="">FUTURE</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
