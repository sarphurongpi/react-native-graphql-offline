import { BaseMutationOptions, gql, useMutation } from '@apollo/client';

const GQL_MUTATION = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId) {
      id
      text
      createdAt
    }
  }
`;

interface DeletePostData {
  // deletePost: Post!
}

interface IVariables {
  // postId: ID!
}

interface MutationProps extends BaseMutationOptions<{ data: DeletePostData }> {}

export const useDeletePostMutation = () => {
  return useMutation<DeletePostData, IVariables>(GQL_MUTATION);
};
