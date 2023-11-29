import { gql } from "@apollo/client";

const LIST_ARTICLES = gql`
  query listArticles {
    articleCollection {
      items {
        title
        slug
        coverImage {
          url
        }
        content {
          json
        }
        sys {
          id
        }
        relatedArticlesCollection {
          items {
            title
            slug
            coverImage {
              url
            }
            content {
              json
            }
            sys {
              id
            }
          }
        }
        countriesCollection {
          items {
            name
            code
          }
        }
        industriesCollection {
          items {
            name
          }
        }
      }
      total
    }
  }
`;

export { LIST_ARTICLES };
