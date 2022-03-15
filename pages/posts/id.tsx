import { Client } from '@notionhq/client';
import Link from 'next/link';

const notion = new Client({ auth: process.env.NOTION_KEY });

export default function Page({posts} : {posts: any}): JSX.Element {
  {console.log(posts.properties.Title.title[0].plain_text)}
  return (
    <>
      <p>取得したページの情報を反映させる</p>
      <p>{posts.properties.Title.title[0].plain_text}</p>
      <p>{posts.properties.Date.multi_select[0].name}</p>
      <Link href="/">
      <p>{posts.properties.User.rich_text[0].plain_text}</p>
      </Link>
    </>
  );
}

const pageId = '55552c393a22480b93ce3d3e50f1ea64';

export async function getStaticProps() {
  const response = await notion.pages.retrieve({ page_id: pageId });

  return {
    props: { posts: response },
  };
}
