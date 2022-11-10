import { Client } from "@notionhq/client"
const notion = new Client({ auth: process.env.NOTION_API_KEY })

export default async (req, res) => { 
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID
  });
  
  res.status(200).json({ response });
}


// async function addItem(text) {
//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         title: {
//           title:[
//             {
//               "text": {
//                 "content": text
//               }
//             }
//           ]
//         }
//       },
//     })
//     console.log(response)
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// }

// addItem("Yurts in Big Sur, California")

