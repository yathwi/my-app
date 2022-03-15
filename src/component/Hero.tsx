import Image from "next/image";

export default function Hero(){
    return(
        <>
            <div className="bg-blue-300 z-[-3] ">
                <div className="bg-hero-pc">
                <div className="flex">
                    <p className="flex w-1/2 justify-center items-center font-semibold text-4xl text-white ">ブログ</p>
                    <Image src="/hero.png" width={625} height={371} className="w-1/2 " />
                </div>
                </div>
            </div>
        </>
    );
}