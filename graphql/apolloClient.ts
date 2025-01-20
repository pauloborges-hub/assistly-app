import {
   ApolloClient,
   DefaultOptions,
   InMemoryCache,
   createHttpLink
} from "@apollo/client";

export const BASE_URL =
   process.env.NODE_ENV !== "development"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";

const httpLink = createHttpLink({
   uri: `${BASE_URL}/api/graphql`
});