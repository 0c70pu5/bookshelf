import gql from 'graphql-tag';

export const userQuery = gql`
  query($email: String! $password: String!) {
    user(email: $email password: $password) {
      token
      name
    }
  }
`;
