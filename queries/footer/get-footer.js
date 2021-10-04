export const GET_FOOTER_WIDGET = `
  widgets(where: {sidebar: FOOTER_WIDGETS}) {
    edges {
      node {
        title
        type
        ... on WPWidgetCustomHTML {
          content
        }
        ... on WPNavMenuWidget {
          id
          title
          rendered {
            node {
              menuItems {
                edges {
                  node {
                    url
                    label
                  }
                }
              }
            }
          }
        }
      }
    }
  }

`;
