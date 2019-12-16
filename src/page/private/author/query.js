import gql from 'graphql-tag';

export const authorById = gql`
  query($id: ID!) {
    author(id: $id) {
      id
      name
      biography
      books {
        id
        name
        date
      }
    }
  }
`;
