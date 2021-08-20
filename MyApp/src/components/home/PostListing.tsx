import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import usePostsQuery from '../../services/graphql/query/usePostsQuery';

interface PostListingProps {}

const PostListing: React.FC<PostListingProps> = ({}) => {
  const { data, loading, refetch } = usePostsQuery();

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={data && data.posts}
      renderItem={_renderPost}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

const _renderPost = ({ item }: ListRenderItemInfo<Post>) => {
  return <Text>- {item.text}</Text>;
};

export default PostListing;
