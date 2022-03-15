import { Client } from '@notionhq/client';
import Link from 'next/link';
import Layout from '../../src/component/PageHeader';

interface PropsBlock{
  id:string;
  type:
  | 'heading_2'
  | 'paragraph'
  | 'heading_1'
  | 'heading_3'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'to_do'
  | 'toggle'
  | 'child_page'
  | 'unsupported';
  text:string;
}
interface Post{
  title:string;
  publishedAt: string;
  blocks:PropsBlock[];
}
interface Props{
  post:Post;
}

export const notion = new Client({ auth: process.env.NOTION_KEY });
export const databaseId = process.env.NOTION_DATABASE_ID;

(async() =>{
  const databaseId ="55552c39-3a22-480b-93ce-3d3e50f1ea64"
  const posts =await notion.databases.query({
    database_id: databaseId,
    sorts:[
      {
        property: 'PublishedAt',
        direction: 'descending',
      }
    ]
  });
});


export default function Page({ posts }: { posts: any }):JSX.Element {
//  {console.log(posts.url)}
 
  return (
          <div >
              <Layout />
                <div className=''>
                  <p className=' font-bold text-3xl'>{`タイトル:${posts.properties.Title.title[0].plain_text}`}</p>
                  <p className='text-gray-400'>{`日にち:${posts.properties.Date.multi_select[0].name}`}</p>
                  <p className='p-2'>{`著者:${posts.properties.User.rich_text[0].plain_text}`}</p>
                </div> 
                <Link href="/"><a className='hover:bg-gray-500'>Back to home</a></Link>
          </div>
  );
}

export async function getStaticPaths(){
  const response = await notion.databases.query({database_id:databaseId!})
  // {console.log(response.results)}
  const paths =(response.results.map((result, i)=> {
    return {params:{id: result.id}}
  }))
  // {console.log(paths)}
  return{
    paths:paths,
    fallback:false,
  }
}
export async function getStaticProps({params}:{params:any}) {
  const response = await notion.pages.retrieve({page_id:params.id!})  
  return {
    props: { posts: response },
  };
}
