import gql from 'graphql-tag';

export const getBookById = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      date
      description
      authors {
        id
        name
      }
      comments {
        id
        text
        userName
      }
    }
  }
`;
