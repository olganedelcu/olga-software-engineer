import axios from 'axios';

const fetchHashnodeBlogFeed = async (first = 10, after = null) => {
  const query = `
    query GetUserPosts($first: Int!, $after: String) {
      publication(host: "olgaconstantina.hashnode.dev") {
        posts(first: $first, after: $after) {
          edges {
            node {
              title
              brief
              coverImage {
                url
              }
              slug
            }
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  `;

  const variables = { first, after };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 86029010-a211-4dc1-8432-02956637d863`,
  };

  try {
    const response = await axios.post('https://gql.hashnode.com', { query, variables }, { headers });
    return response.data.data.publication.posts;
  } catch (error) {
    console.error('Error fetching Hashnode blog posts:', error.response?.data || error.message);
    throw error;
  }
};

export default fetchHashnodeBlogFeed;
