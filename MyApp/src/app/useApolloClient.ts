import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageWrapper, persistCache } from 'apollo3-cache-persist';
import { useEffect, useState } from 'react';
import useApolloLinkQueue from './useApolloLinkQueue';

export const useApolloClient = () => {
  const { offlineLink } = useApolloLinkQueue();
  const uri = 'http://localhost:4000';
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache();
      const httpLink = new HttpLink({ uri });
      const link = ApolloLink.from([new RetryLink(), offlineLink, httpLink]);

      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      });

      setClient(new ApolloClient({ link, cache }));
    }

    init();
  }, [offlineLink, uri]);

  return {
    client,
  };
};
