export const homepageQuery = `
query HomepageQuery {
    homepageSections {
      edges {
        node {
          homepage {
            hero {
              animatedwords
              heading
              subtitle
            }
            callouts {
              title
              subtitle
              calloutone {
                title
                subtext
                image {
                  mediaItemUrl
                }
              }
              calloutthree {
                title
                subtext
                image {
                  mediaItemUrl
                }
              }
              callouttwo {
                title
                subtext
                image {
                  mediaItemUrl
                }
              }
            }
            icongrid {
              iconone {
                description
                icon
                title
              }
              iconfive {
                description
                icon
                title
              }
              iconfour {
                description
                icon
                title
              }
              iconsix {
                description
                icon
                title
              }
              iconthree {
                description
                icon
                title
              }
              icontwo {
                description
                icon
                title
              }
            }
          }
        }
      }
    }
  } 
`;

let condition = `after: "$endCursor",first: 12, where: {orderby: {field: DATE, order: DESC}}`;

export const blogPosts = `
  query BlogPosts($endCursor: String) {
    posts(after: $endCursor,first: 12, where: {orderby: {field: DATE, order: DESC}}) {
      edges {
        node {
          author {
            node {
              nickname
            }
          }
          date
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          title
        }
      }

      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const blogPostBySlug = `
  query PostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      content
      title
      author {
        node {
          nickname
          avatar {
            url
          }
        }
      }
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
   
    }
  }
`;
