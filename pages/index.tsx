import { Client } from '@notionhq/client';
import Head from 'next/head';
import Link from 'next/link';
import PageHeader from '../src/component/PageHeader';
import Hero from '../src/component/Hero';
import Contents from '../src/component/Contents';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// console.log(notion)
// console.log(databaseId)


export default function Home({posts}:{posts:any}) {
  {console.log(posts.results[0].id);}
  return( 
  <>
    <PageHeader />
    <Hero />
    <Contents />
    <div className='mx-auto max-w-[80%]'>
      <div className='grid grid-cols-3'>
      {posts.results.map((result:any, i:any)=>{
    return(
        <Link key={i} href={`/posts/${result.id}`}>
          <a >
            <div className='m-10'>
              <a href={result.url} target={"_blank"} rel="oreferrer">
                <button className="h-40 w-60 rounded-md border-2 border-gray-200 text-left hover:bg-gray-200">
                  <p className='flex px-2 h-20 justify-center items-center bg-gray-400'>{`タイトル:${result.properties.Title.title[0].plain_text}`}</p>
                  <p className='flex justify-center items-center p-2 h-10'>{`日にち:${result.properties.Date.multi_select[0].name}`}</p>
                  <p className='flex justify-center items-center p-2 h-10'>{`著者:${result.properties.User.rich_text[0].plain_text}`}</p>
                </button>
              </a>
            </div>
          </a>
        </Link>
      
  );
 })}
    </div>
    </div>
  </>
  );
}

export async function getStaticProps() {
  const response = await notion.databases.query({ database_id: databaseId! });
  
  return {
    props: { posts: response },
  };
}


