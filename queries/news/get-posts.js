import { gql } from "@apollo/client";
import { GET_HEADER } from "../header/get-header";
import { GET_FOOTER_WIDGET } from "../footer/get-footer";
import { GET_PAGES } from "../pages/get-pages";

export const GET_POSTS = gql`
  query AllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          id
          date
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    ${GET_HEADER}
    ${GET_FOOTER_WIDGET}
    ${GET_PAGES}
  }
`;

export const GET_POST_BY_SLUGS = gql`
  query AllPosts {
    ${GET_HEADER}
    ${GET_FOOTER_WIDGET}
    ${GET_PAGES}
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query PostBySlug($id: ID!) {
    ${GET_HEADER}
    ${GET_FOOTER_WIDGET}
    ${GET_PAGES}
    post(id: $id, idType: SLUG) {
      title
      content
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;
