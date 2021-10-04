import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.WP_API_URL,
  cache: new InMemoryCache({ resultCaching: false }),
});

export default client;
