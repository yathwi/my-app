import Image from "next/image"

export default function PageHeader(){
    return(
        <header className="flex justify-between max-w-[90%] mx-auto items-center">
            <div className=" h-20 w-auto">
                <Image src="/logo.png" width={166} height={83} className="hover:bg-gray-100" />
            </div>
            <div className="flex">
                <button className="bg-green-400  h-10 w-auto px-2 rounded-md hover:bg-green-700">投稿</button>
                <button className="ml-5 border-solid border-2 gray-400 h-10 w-auto px-2 rounded-md hover:bg-gray-400">ログアウト</button>
            </div>
        </header>
    )
}