import { gql } from "@apollo/client";
import { GET_FOOTER_WIDGET } from "../footer/get-footer";
import { GET_HEADER } from "../header/get-header";

export const GET_PAGES = `
  pages {
    edges {
      node {
        title
        uri
      }
    }
  }
`;

export const GET_PAGE_BY_URI = gql`
  query GetPageByUri {
    pages {
      edges {
        node {
          uri
        }
      }
    }
  }
`;

export const GET_PAGE = gql`
  query GetPage($id: ID!) {
    page(id: $id, idType: URI) {
      title
      content
    }
    ${GET_HEADER}
    ${GET_FOOTER_WIDGET}
    ${GET_PAGES}
  }
`;
export const GET_FRONT_PAGE = gql`
  query getFrontPage {
    pageBy(uri: "/") {
      isFrontPage
      title
      content
    }
    ${GET_HEADER}
    ${GET_FOOTER_WIDGET}
    ${GET_PAGES}
  }
`;
