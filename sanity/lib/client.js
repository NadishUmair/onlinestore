import { createClient } from 'next-sanity'


export const projectId = "jycmsfpl";
export const dataset = "production";
export const apiVersion = '2021-06-07';
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
