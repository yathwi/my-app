import React from "react";
import Image from "next/image";

class Footer extends React.Component{
    render(){
        return(
            <div className="bg-black-bg text-white h-full">
                <div className="py-10">
                    <div className="">
                        <p className="flex justify-center">CREATED BY</p>
                        <p className="flex justify-center">名前 太郎</p>
                    </div>
                    <div className="flex justify-center py-10">
                        <Image src="/logo_white.png" alt="logo" width={120} height={144} className="pl-100"/>
                    </div>
                    <div className=" mx-auto w-24 flex justify-between ">
                        <Image src="/twitter.png" width={36} height={30}  />
                        <Image src="/facebook.png" width={36} height={36} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;