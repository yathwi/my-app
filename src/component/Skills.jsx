import React from "react";
import Image from "next/image";

class Skills extends React.Component{
    render(){
        return(
            <div id="skills" className="relative py-10 w-full">
                <div className="absolute -mt-16 w-full h-full bg-skill-pc" />
                <div className="mx-auto  "> 
                    <div className="grid grid-cols-2">
                        <div className="pl-20 mt-10">
                            <Image src="/skill.png" alt="skill" width={535} height={372} />
                        </div >
                        <div className="z-10 my-10 max-w-[80%]">                          
                            <div className="flex items-center ">
                                <h2 className="text-2xl font-semibold text-black-base">スキル</h2>
                                <h3 className="flex-initial ml-4 font-semibold text-primary-dark">SKILLS</h3> 
                            </div>
                            <div className="mb-10"> 
                                <p className="text-black-base mt-4 leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                            </div>
                            <div className="bg-white px-5 py-8">
                                <div className="relative pt-1">
                                    <div className="font-semibold text-primary-dark">
                                        <h3>SKILLSKILL</h3>
                                    </div>
                                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-progress-base ">
                                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-green"></div>
                                    </div>
                                </div>
                                <div className="relative pt-1">
                                    <div className="font-semibold text-primary-dark">
                                        <h3>SKILLSKILL</h3>
                                    </div>
                                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-progress-base">
                                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-green"></div>
                                    </div>
                                </div>
                                <div className="relative pt-1">
                                    <div className="font-semibold text-primary-dark">
                                        <h3>SKILLSKILL</h3>
                                    </div>
                                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-progress-base">
                                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-green"></div>
                                    </div>
                                </div>
                                <div className="relative pt-1">
                                    <div className="font-semibold text-primary-dark">
                                        <h3>SKILLSKILL</h3>
                                    </div>
                                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-progress-base">
                                        <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-green"></div>
                                    </div>
                                </div>
                            </div>
                           
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;