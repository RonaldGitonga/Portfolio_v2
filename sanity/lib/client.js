import { createClient } from 'next-sanity'
import  imageUrlBuilder  from '@sanity/image-url'
//groq
import {groq} from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder= imageUrlBuilder(client)


export const urlFor=(source)=>builder.image(source);

const query=groq`
*[_type=='project']{
  name,link,image
}
`
export const revalidate=60;
export const getProjects=async()=>{

  const projects=await client.fetch(query);
  return projects;
}
