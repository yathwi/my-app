const databaseId = "2a16baebb80a41aeba050535fd1ff117";

import { Client } from "@notionhq/client/build/src";
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints.d';
export default async function getBlogAll(){
    const notion  = new Client({ auth: process.env.NOTION_KEY 
    });
    
    return await notion.databases.query({
        database_id: databaseId,
        filter:{
            or:[
                {
                    property:"publish",
                    checkbox:{
                        equals:true,
                    }
            }
            ]
        },
        sorts:[
            {
                property:"create_time",
                direction:"ascending"
            }
        ]
    });
}