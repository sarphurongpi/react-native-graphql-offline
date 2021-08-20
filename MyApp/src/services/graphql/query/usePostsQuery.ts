import { gql, useQuery } from '@apollo/client';

const GQL_QUERY = gql`
  query Posts {
    posts {
      id
      text
      createdAt
    }
  }
`;

interface IData {
  posts: Post[];
}

const usePostsQuery = () => {
  return useQuery<IData>(GQL_QUERY, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-and-network',
  });
};

export default usePostsQuery;
