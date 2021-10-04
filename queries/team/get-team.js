import { gql } from "@apollo/client";
import { GET_FOOTER_WIDGET } from "../footer/get-footer";
import { GET_HEADER } from "../header/get-header";
import { GET_PAGES } from "../pages/get-pages";
export const GET_TEAM = gql`
  query AllTeams {
    ${GET_HEADER}
    ${GET_FOOTER_WIDGET}
    ${GET_PAGES}
    teams {
      edges {
        node {
          id
          content(format: RENDERED)
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          teamMeta {
            teamDesignation
            teamLinkedin
          }
        }
      }
    }
  }
`;
