export const GET_HEADER = `
    menus(where: { location: TOP_BAR_R }) {
      nodes {
        id
        name
        menuItems {
          edges {
            node {
              id
              label
              parentId
              url
            }
          }
        }
      }
    }
  
`;
