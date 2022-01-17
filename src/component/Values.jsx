import React from "react";

class Values extends React.Component{
    render(){
        return(
            <div className="">
                <div className="flex justify-center ">
                    <h2 className="text-2xl font-semibold text-black-base">価値観</h2>
                    <h3 className="flex-initial ml-4 font-semibold text-primary-dark">VALUES</h3> 
                </div>
                <div className="mx-auto max-w-[80%] py-10    ">
                    <div className="flex justify-center ">
                        <div className=" w-80 mx-auto ">
                            <img  src="/value1.png" alt="" className="mx-auto " />
                                <p className="flex justify-center py-8  font-mono">価値観01</p>
                                <p className="flex justify-center">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </div>
                        <div className=" w-80 mx-auto">
                            <img src="/value2.png" alt="" className="mx-auto"/>
                                <p className="flex justify-center py-8  font-mono">価値観02</p>
                                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </div>
                        <div className=" w-80 mx-auto">
                            <img src="/value3.png" alt="" className="mx-auto"/>
                                <p className="flex justify-center py-8  font-mono">価値観03</p>
                                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Values;