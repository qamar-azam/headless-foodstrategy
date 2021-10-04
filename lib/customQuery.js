import { gql } from "@apollo/client";
import client from "../apollo-client";

export function customQuery(query) {
  return client.query({
    query: gql`
      ${query}
    `,
  });
}
