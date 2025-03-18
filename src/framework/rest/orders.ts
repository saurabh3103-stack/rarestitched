// import {
//   Order,
//   OrdersQueryOptionsType,
//   CreateOrderPaymentInput,
//   PaymentGateway,
//   OrderCreateInputType,
//   DownloadableFilePaginator,
//   QueryOptions,
//   OrderQueryOptions,
// } from '@type/index';
// import { mapPaginatorData } from '@framework/utils/data-mappers';
// import { API_ENDPOINTS } from '@framework/utils/endpoints';
// import {
//   useInfiniteQuery,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from 'react-query';
// import { toast } from 'react-toastify';
// import { useTranslation } from 'next-i18next';
// import client from '@framework/utils/index';
// import { useRouter } from 'next/router';
// import { useUI } from '@contexts/ui.context';
// import { ROUTES } from '@lib/routes';

// export const useOrders = (options: OrdersQueryOptionsType) => {
//   const { data, isLoading, error } = useQuery<Order, Error>(
//     [API_ENDPOINTS.ORDER, options],
//     ({ queryKey, pageParam }) =>
//       client.orders.find(Object.assign({}, queryKey[1], pageParam)),
//     {
//       keepPreviousData: true,
//     }
//   );

//   return {
//     orders: {
//       data,
//       paginatorInfo: mapPaginatorData({ ...data }),
//     },
//     isLoading,
//     error,
//   };
// };
// export const useOrder = ({ tracking_number }: { tracking_number: string }) => {
//   // Declare a state variable to store the response globally within this hook
//   let response: Order | undefined;

//   const { isLoading, error, isFetching, data, refetch } = useQuery<Order, Error>(
//     [API_ENDPOINTS.ORDER, tracking_number],
//     async () => {
//       response = await client.orders.findOne(tracking_number);
//       console.log('Response from client.orders.findOne:', response); // Log the response
//       return response; // This is used to populate `data`
//     },
//     {
//       // The `select` option will modify the data returned by the query
//       select: (data) => {
//         response = data; // Update the `response` with `data` returned from the query
//         return data; // Return the modified data (response) to populate `data`
//       }
//     }
//   );

//   return {
//     data: response, // Set the data to be the global `response`
//     paginatorInfo: data ? mapPaginatorData({ ...data }) : null,
//     isLoading,
//     isFetching,
//     refetch,
//     error,
//   };
// };

// // const response=''
// // export const useOrder = ({ tracking_number }: { tracking_number: string }) => { 
// //   const { data, isLoading, error, isFetching, refetch } = useQuery<Order, Error>(
// //     [API_ENDPOINTS.ORDER, tracking_number],
// //     async () => {
// //       const response = await client.orders.findOne(tracking_number);
// //       console.log('Response from client.orders.findOne:', response); // Log the response
// //       return response; // Ensure the full response is returned
// //     }
// //   );

// //   // Log the value of `data` whenever it changes
// //   useEffect(() => {
// //     if (data) {
// //       console.log('Data after being set by the response:', data);
// //     }
// //   }, [data]); // Dependency array ensures this runs whenever `data` changes

// //   return {
// //     data,
// //     paginatorInfo: mapPaginatorData({ ...data }),
// //     isLoading,
// //     isFetching,
// //     refetch,
// //     error,
// //   };
// // };

// // export const useOrderStatusesQuery = () => {
// //   const { data, isLoading, error } = useQuery<any[], Error>(
// //     [API_ENDPOINTS.ORDER_STATUS],
// //     () => client.orders.fetchUrl(),
// //     {
// //       keepPreviousData: true,
// //     }
// //   );

// //   return {
// //     data: data ?? [],
// //     paginatorInfo: mapPaginatorData({ ...data }),
// //     isLoading,
// //     error,
// //   };
// // };

// // export const useCreateOrder = () => {
// //   const { t } = useTranslation();

// //   return useMutation(client.orders.create, {
// //     onSuccess: () => {
// //       toast.success(t('Order Created Success'));
// //     },
// //     onError: (error) => {
// //       const {
// //         response: { data },
// //       }: any = error ?? {};

// //       toast.error(t(data?.message));
// //     },
// //   });
// // }

// export function useCreateOrder() {
//   const router = useRouter();
//   const { locale } = router;
//   const { t } = useTranslation();
//   const { mutate: createOrder, isLoading } = useMutation(client.orders.create, {
//     onSuccess: ({ tracking_number, payment_gateway, payment_intent }) => {
//       if (tracking_number) {
//         if ([PaymentGateway.COD].includes(payment_gateway as PaymentGateway)) {
//           return router.push(
//             `${ROUTES.ORDERS}/${encodeURIComponent(tracking_number)}`
//           );
//         }

//         if (payment_intent?.payment_intent_info?.is_redirect) {
//           return router.push(
//             payment_intent?.payment_intent_info?.redirect_url as string
//           );
//         } else {
//           return router.push(
//             `${ROUTES.ORDERS}/${encodeURIComponent(tracking_number)}/payment`
//           );
//         }
//       }
//     },
//     onError: (error) => {
//       const {
//         response: { data },
//       }: any = error ?? {};
//       toast.error(data?.message);
//     },
//   });

//   function formatOrderInput(input: OrderCreateInputType) {
//     const formattedInputs = {
//       ...input,
//       language: locale,
//       invoice_translated_text: {
//         subtotal: t('order-sub-total'),
//         discount: t('order-discount'),
//         tax: t('order-tax'),
//         delivery_fee: t('order-delivery-fee'),
//         total: t('order-total'),
//         products: t('text-products'),
//         quantity: t('text-quantity'),
//         invoice_no: t('text-invoice-no'),
//         date: t('text-date'),
//       },
//     };
//     createOrder(formattedInputs);
//   }

//   return {
//     createOrder: formatOrderInput,
//     isLoading,
//     // isPaymentIntentLoading
//   };
// }

// export function useOrderPayment() {
//   const queryClient = useQueryClient();

//   const { mutate: createOrderPayment, isLoading } = useMutation(
//     client.orders.payment,
//     {
//       onSettled: (data) => {
//         queryClient.refetchQueries(API_ENDPOINTS.ORDERS);
//       },
//       onError: (error) => {
//         const {
//           response: { data },
//         }: any = error ?? {};
//         toast.error(data?.message);
//       },
//     }
//   );

//   function formatOrderInput(input: CreateOrderPaymentInput) {
//     const formattedInputs = {
//       ...input,
//     };
//     createOrderPayment(formattedInputs);
//   }

//   return {
//     createOrderPayment: formatOrderInput,
//     isLoading,
//   };
// }

// export function useSavePaymentMethod() {
//   const {
//     mutate: savePaymentMethod,
//     isLoading,
//     error,
//     data,
//   } = useMutation(client.orders.savePaymentMethod);

//   return {
//     savePaymentMethod,
//     data,
//     isLoading,
//     error,
//   };
// }

// export function useGetPaymentIntent({
//   tracking_number,
//   payment_gateway,
//   recall_gateway,
//   form_change_gateway,
// }: {
//   tracking_number: string;
//   payment_gateway: string;
//   recall_gateway?: boolean;
//   form_change_gateway?: boolean;
// }) {
//   const router = useRouter();
//   const { setModalView, setModalData, openModal } = useUI();

//   const { data, isLoading, error, refetch, isFetching } = useQuery(
//     [
//       API_ENDPOINTS.PAYMENT_INTENT,
//       { tracking_number, payment_gateway, recall_gateway },
//     ],
//     () =>
//       client.orders.getPaymentIntent({
//         tracking_number,
//         payment_gateway,
//         recall_gateway,
//       }),
//     {
//       enabled: false,
//       onSuccess: (data) => {
//         if (data?.payment_intent_info?.is_redirect) {
//           return router.push(data?.payment_intent_info?.redirect_url as string);
//         } else {
//           setModalData({
//             paymentGateway: data?.payment_gateway,
//             paymentIntentInfo: data?.payment_intent_info,
//             trackingNumber: data?.tracking_number,
//           });
//           setModalView('PAYMENT_MODAL');
//           return openModal();
//         }
//       },
//     }
//   );

//   return {
//     data,
//     getPaymentIntentQuery: refetch,
//     isLoading,
//     error,
//   };
// }

// export const useDownloadableProducts = (options: OrderQueryOptions) => {
//   const { locale } = useRouter();

//   const formattedOptions = {
//     ...options,
//     // language: locale
//   };

//   const {
//     data,
//     isLoading,
//     isFetching,
//     isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage,
//     error,
//   } = useInfiniteQuery<DownloadableFilePaginator, Error>(
//     [API_ENDPOINTS.ORDERS_DOWNLOADS, formattedOptions],
//     ({ queryKey, pageParam }) =>
//       client.orders.downloadable(Object.assign({}, queryKey[1], pageParam)),
//     {
//       getNextPageParam: ({ current_page, last_page }) =>
//         last_page > current_page && { page: current_page + 1 },
//       refetchOnWindowFocus: false,
//     }
//   );

//   function handleLoadMore() {
//     fetchNextPage();
//   }

//   return {
//     downloads: data?.pages?.flatMap((page) => page.data) ?? [],
//     paginatorInfo: Array.isArray(data?.pages)
//       ? mapPaginatorData(data?.pages[data.pages.length - 1])
//       : null,
//     isLoading,
//     isFetching,
//     isLoadingMore: isFetchingNextPage,
//     error,
//     loadMore: handleLoadMore,
//     hasMore: Boolean(hasNextPage),
//   };
// };

// export function useGenerateDownloadableUrl() {
//   const { mutate: getDownloadableUrl } = useMutation(
//     client.orders.generateDownloadLink,
//     {
//       onSuccess: (data) => {
//         function download(fileUrl: string, fileName: string) {
//           var a = document.createElement('a');
//           a.href = fileUrl;
//           a.setAttribute('download', fileName);
//           a.click();
//         }

//         download(data, 'record.name');
//       },
//     }
//   );

//   function generateDownloadableUrl(digital_file_id: string) {
//     getDownloadableUrl({
//       digital_file_id,
//     });
//   }

//   return {
//     generateDownloadableUrl,
//   };
// }




// old

import {
  Order,
  OrdersQueryOptionsType,
  CreateOrderPaymentInput,
  PaymentGateway,
  OrderCreateInputType,
  DownloadableFilePaginator,
  QueryOptions,
  OrderQueryOptions,
} from '@type/index';
import { mapPaginatorData } from '@framework/utils/data-mappers';
import { API_ENDPOINTS } from '@framework/utils/endpoints';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import client from '@framework/utils/index';
import { useRouter } from 'next/router';
import { useUI } from '@contexts/ui.context';
import { ROUTES } from '@lib/routes';

export const useOrders = (options: OrdersQueryOptionsType) => {
  const { data, isLoading, error } = useQuery<Order, Error>(
    [API_ENDPOINTS.ORDER, options],
    ({ queryKey, pageParam }) =>
      client.orders.find(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    orders: {
      data,
      paginatorInfo: mapPaginatorData({ ...data }),
    },
    isLoading,
    error,
  };
};

export const useOrder = ({ tracking_number }: { tracking_number: string }) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery<
    Order,
    Error
  >([API_ENDPOINTS.ORDER, tracking_number], () =>
    client.orders.findOne(tracking_number)
  );

  return {
    data,
    paginatorInfo: mapPaginatorData({ ...data }),
    isLoading,
    isFetching,
    refetch,
    error,
  };
};

// export const useOrderStatusesQuery = () => {
//   const { data, isLoading, error } = useQuery<any[], Error>(
//     [API_ENDPOINTS.ORDER_STATUS],
//     () => client.orders.fetchUrl(),
//     {
//       keepPreviousData: true,
//     }
//   );

//   return {
//     data: data ?? [],
//     paginatorInfo: mapPaginatorData({ ...data }),
//     isLoading,
//     error,
//   };
// };

// export const useCreateOrder = () => {
//   const { t } = useTranslation();

//   return useMutation(client.orders.create, {
//     onSuccess: () => {
//       toast.success(t('Order Created Success'));
//     },
//     onError: (error) => {
//       const {
//         response: { data },
//       }: any = error ?? {};

//       toast.error(t(data?.message));
//     },
//   });
// }

export function useCreateOrder() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();
  const { mutate: createOrder, isLoading } = useMutation(client.orders.create, {
    onSuccess: ({ tracking_number, payment_gateway, payment_intent }) => {
      if (tracking_number) {
        if ([PaymentGateway.COD].includes(payment_gateway as PaymentGateway)) {
          return router.push(
            `${ROUTES.ORDERS}/${encodeURIComponent(tracking_number)}`
          );
        }

        if (payment_intent?.payment_intent_info?.is_redirect) {
          return router.push(
            payment_intent?.payment_intent_info?.redirect_url as string
          );
        } else {
          return router.push(
            `${ROUTES.ORDERS}/${encodeURIComponent(tracking_number)}/payment`
          );
        }
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};
      toast.error(data?.message);
    },
  });

  function formatOrderInput(input: OrderCreateInputType) {
    const formattedInputs = {
      ...input,
      language: locale,
      invoice_translated_text: {
        subtotal: t('order-sub-total'),
        discount: t('order-discount'),
        tax: t('order-tax'),
        delivery_fee: t('order-delivery-fee'),
        total: t('order-total'),
        products: t('text-products'),
        quantity: t('text-quantity'),
        invoice_no: t('text-invoice-no'),
        date: t('text-date'),
      },
    };
    createOrder(formattedInputs);
  }

  return {
    createOrder: formatOrderInput,
    isLoading,
    // isPaymentIntentLoading
  };
}

export function useOrderPayment() {
  const queryClient = useQueryClient();

  const { mutate: createOrderPayment, isLoading } = useMutation(
    client.orders.payment,
    {
      // Runs after mutation (success or failure)
      onSettled: (data) => {
        console.log('✅ Mutation Settled:', data);
        alert('Mutation Settled: Payment process completed (success or failure)');
        
        // Refetch the order list
        queryClient.refetchQueries(API_ENDPOINTS.ORDERS);
      },
  
      // Handles Backend Errors
      onError: (error) => {
        console.error('❌ Payment Failed:', error);
        alert(`Payment Failed: ${error?.response?.data?.message || 'Unknown error'}`);
        
        const {
          response: { data },
        }: any = error ?? {};
        
        console.log('🔍 Error Response Data:', data);  // Log full error data
        toast.error(data?.message || 'An error occurred during payment');
      },
    }
  );
  

  function formatOrderInput(input: CreateOrderPaymentInput) {
    const formattedInputs = {
      ...input,
    };
    createOrderPayment(formattedInputs);
  }

  return {
    createOrderPayment: formatOrderInput,
    isLoading,
  };
}

export function useSavePaymentMethod() {
  const {
    mutate: savePaymentMethod,
    isLoading,
    error,
    data,
  } = useMutation(client.orders.savePaymentMethod);

  return {
    savePaymentMethod,
    data,
    isLoading,
    error,
  };
}

export function useGetPaymentIntent({
  tracking_number,
  payment_gateway,
  recall_gateway,
  form_change_gateway,
}: {
  tracking_number: string;
  payment_gateway: string;
  recall_gateway?: boolean;
  form_change_gateway?: boolean;
}) {
  const router = useRouter();
  const { setModalView, setModalData, openModal } = useUI();

  const { data, isLoading, error, refetch, isFetching } = useQuery(
    [
      API_ENDPOINTS.PAYMENT_INTENT,
      { tracking_number, payment_gateway, recall_gateway },
    ],
    () =>
      client.orders.getPaymentIntent({
        tracking_number,
        payment_gateway,
        recall_gateway,
      }),
    {
      enabled: false,
      onSuccess: (data) => {
        if (data?.payment_intent_info?.is_redirect) {
          return router.push(data?.payment_intent_info?.redirect_url as string);
        } else {
          setModalData({
            paymentGateway: data?.payment_gateway,
            paymentIntentInfo: data?.payment_intent_info,
            trackingNumber: data?.tracking_number,
          });
          setModalView('PAYMENT_MODAL');
          return openModal();
        }
      },
    }
  );

  return {
    data,
    getPaymentIntentQuery: refetch,
    isLoading,
    error,
  };
}

export const useDownloadableProducts = (options: OrderQueryOptions) => {
  const { locale } = useRouter();

  const formattedOptions = {
    ...options,
    // language: locale
  };

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery<DownloadableFilePaginator, Error>(
    [API_ENDPOINTS.ORDERS_DOWNLOADS, formattedOptions],
    ({ queryKey, pageParam }) =>
      client.orders.downloadable(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
      refetchOnWindowFocus: false,
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    downloads: data?.pages?.flatMap((page) => page.data) ?? [],
    paginatorInfo: Array.isArray(data?.pages)
      ? mapPaginatorData(data?.pages[data.pages.length - 1])
      : null,
    isLoading,
    isFetching,
    isLoadingMore: isFetchingNextPage,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
};

export function useGenerateDownloadableUrl() {
  const { mutate: getDownloadableUrl } = useMutation(
    client.orders.generateDownloadLink,
    {
      onSuccess: (data) => {
        function download(fileUrl: string, fileName: string) {
          var a = document.createElement('a');
          a.href = fileUrl;
          a.setAttribute('download', fileName);
          a.click();
        }

        download(data, 'record.name');
      },
    }
  );

  function generateDownloadableUrl(digital_file_id: string) {
    getDownloadableUrl({
      digital_file_id,
    });
  }

  return {
    generateDownloadableUrl,
  };
}