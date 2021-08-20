import NetInfo from '@react-native-community/netinfo';
import QueueLink from 'apollo-link-queue';
import { useEffect, useMemo } from 'react';

const useApolloLinkQueue = () => {
  const offlineLink = useMemo(() => {
    return new QueueLink();
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      state.isConnected ? offlineLink.open() : offlineLink.close();
    });
    return () => {
      unsubscribe();
    };
  }, [offlineLink]);

  return {
    offlineLink,
  };
};

export default useApolloLinkQueue;
