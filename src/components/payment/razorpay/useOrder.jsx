// useOrder Hook
import { useQuery } from 'react-query';
import client from '@framework/utils/index';

export const useOrder = (tracking_number) => {
  const { data, isLoading, error } = useQuery(
    ['order', tracking_number],
    () => client.orders.findOne(tracking_number),
    {
      enabled: !!tracking_number,
    }
  );

  return { data, isLoading, error };
};
