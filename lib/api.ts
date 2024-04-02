import { homepageQuery, blogPosts, blogPostBySlug } from './queries';

const API_URL = 'https://landing.copyandpost.com/graphql/';

async function fetchAPI(query, { variables = {} } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getHomepageSections() {
  const data = await fetchAPI(homepageQuery);
  return data;
}

export async function getBlogPosts(endCursor = null, taxonomy = null) {
  const data = await fetchAPI(blogPosts, {
    variables: { endCursor: endCursor },
  });
  return data;
}

export async function getBlogPostBySlug(slug) {
  const data = await fetchAPI(blogPostBySlug, { variables: { id: slug } });
  return data;
}
