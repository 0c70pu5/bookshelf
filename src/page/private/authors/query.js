import gql from 'graphql-tag';

export const authorListQuery = gql`
  query {
      authors {
        id
        name
        books {
          id
        }
      }
  }
`;
