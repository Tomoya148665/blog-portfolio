import {
  useMutation,
  ApolloClient,
  InMemoryCache,
  useQuery,
  useSubscription,
  useLazyQuery,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://gapi.storyblok.com/v1/api",
});

const errorLink = onError(({ graphQLErrors }): any => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.log(err);
    }
  }
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
      version: "published",
    },
  };
});

export const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link: from([authLink, errorLink, httpLink]),
});

export const useAstroMutation: typeof useMutation = (query, options) => {
  return useMutation(query, { ...options, client });
};

export const useAstroQuery: typeof useQuery = (query, options) => {
  return useQuery(query, { ...options, client });
};

export const useLazyAstroQuery: typeof useLazyQuery = (query, options) => {
  return useLazyQuery(query, { ...options, client });
};

export const useAstroSubscription: typeof useSubscription = (
  query,
  options
) => {
  return useSubscription(query, { ...options, client });
};
