import React from "react";
import Image from "next/image";

class Future extends React.Component{
    render(){
        return(
            <div className="bg-future-pc -mt-40">
            <div className="pt-60 pb-20">
                    <div className="mx-auto max-w-[90%] " >
                        <div className="flex ">
                            <div className="w-1/2 ">
                                <div className="flex justify-center">
                                    <h2 className="text-2xl font-semibold text-black-base">3年後にやりたいこと</h2>
                                    <h3 className="flex-initial ml-4 font-semibold text-primary-dark">FUTURE</h3> 
                                </div> 
                                <div className="px-16">
                                    <p className="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                                </div>
                            </div>
                            <div className="w-1/2">    
                                <div className="">
                                    <Image src="/future.png" width={450} height={251}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        );
    }
}

export default Future;