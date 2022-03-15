import { Client } from '@notionhq/client';
import Link from 'next/link';
import Image from'next/image';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { text } from 'stream/consumers';


interface Props {
    items:Articles[];
    indexList:string;
}

type Tag ={
    name:string;
};

export type Articles = {
    id: string;
    properties: {
        tag: {
            multi_select: {
                name: string;
            }[];
        };
        created_time:{content:string};
        title:{
            title:{
            text:{content:string};
        }[];
    };
    image:{
        files: {
            file: {
                url: string;
            };
            name:string;
        }[];
    }
}
}
export default function BlogMain(props:Props):JSX.Element{
    const items = props.items;
    const indexList = props.indexList;
    const lastIndex =indexList[indexList.length - 1];
    const router = useRouter();
    const currentPath =router.asPath;
    const currentPathId = currentPath.slice(-1);

    return(
        <section>
            <div className="">
                <div className="">
                    {`${currentPathId}/${lastIndex}`}ページ
                </div>
                <div className="">
                    <div className="">
                        {items.map((item:Articles,Index:number)=>(
                            <div className="" key={lastIndex}>
                                <Link href="/blog/${item.id}">
                                    <a>
                                        <div className=''>
                                            <Image 
                                            src={item.properties.image.files[0].file.url}
                                            alt={item.properties.image.files[0].name}
                                            width={400}
                                            height={200}
                                            ></Image>
                                        </div>
                                    </a>
                                </Link>
                                <h6 className=''>{sliceDate(item.properties.created_time.content)}</h6>
                                <h3 className=''>{item.properties.title.title[0].text.content}</h3>
                                <div className=''>
                                    {item.properties.tag.multi_select.map((tag:Tag,Index_tag:number)=>(
                                        <div className='' key={Index_tag}>
                                            {tag.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <Pagination indexList={indexList}></Pagination> */}
            </div>
        </section>
    );

}