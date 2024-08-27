export interface MenuItem {
  label: string;
  path: string;
}

export interface Menu {
  id: string; // The ID in the data is a string (e.g., "dGVybToy")
  name: string;
  menuItems: {
    edges: {
      node: MenuItem;
    }[];
  };
}

export interface MenuResponse {
  data: {
    menu: Menu;
  };
}

// Extracted menu ID as a variable
const MENU_ID = 'dGVybToy';

// Fetch menu data from WordPress GraphQL endpoint
export const fetchMenuData = async (): Promise<MenuItem[] | null> => {
  try {
    const res = await fetch(`${process.env.WP_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query FetchMenu {
            menu(id: "${MENU_ID}") {
              id
              name
              menuItems {
                edges {
                  node {
                    label
                    path
                  }
                }
              }
            }
          }
        `,
      }),
    });

    // Check if the response is OK (status code 2xx)
    if (!res.ok) {
      console.error('Failed to fetch menu data:', res.statusText);
      return null;
    }

    // Parse the JSON response
    const json: MenuResponse = await res.json();

    // Ensure menu data exists and map it to MenuItem[]
    const edges = json?.data?.menu?.menuItems?.edges ?? [];
    const menuItems: MenuItem[] = edges.map((edge) => edge.node);

    return menuItems;
  } catch (error) {
    // Catch and log any error that occurs during the fetch operation
    console.error('Error fetching menu data:', error);
    return null;
  }
};
