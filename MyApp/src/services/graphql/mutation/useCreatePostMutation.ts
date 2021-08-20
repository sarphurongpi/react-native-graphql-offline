import { BaseMutationOptions, gql, useMutation } from '@apollo/client';

const GQL_MUTATION = gql`
  mutation CreatePost($text: String!) {
    createPost(text: $text) {
      id
      text
      createdAt
    }
  }
`;

interface CreatePostData {
  // createPost: Post!;
}

interface IVariables {
  // text: String!
}

interface MutationProps extends BaseMutationOptions<{ data: CreatePostData }> {}

export const useCreatePostMutation = () => {
  return useMutation<CreatePostData, IVariables>(GQL_MUTATION);
};
