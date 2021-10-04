import client from "../apollo-client";
import { ApolloProvider, gql } from "@apollo/client";
//import "tailwindcss/tailwind.css"
import "../styles/index.css";
//import "../css/app.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
