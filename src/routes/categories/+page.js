import { request, gql } from "graphql-request";

/** @type {import('./$types').PageLoad} */
export function load() {
  // const query = gql`
  //   {
  //     categories(level:0) {
  //       id
  //       name
  //       slug
  //       productsCount
  //       children {
  //         id
  //         name
  //         slug
  //         productsCount
  //         children {
  //           id
  //           name
  //           slug
  //           productsCount
  //         }
  //       }
  //     }
  //   }
  // `;
  // const data = request("http://127.0.0.1:8000/graphql", query);
  const data = {
    categories: [
      {
        id: 1,
        name: "Category 1",
        slug: "category-1",
        productsCount: 5,
        children: [
          {
            id: 2,
            name: "Category 1.2",
            slug: "category-1-2",
            productsCount: 4,
            children: [
              {
                id: 3,
                name: "Category 1.2.3",
                slug: "category-1-2-3",
                productsCount: 3,
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Category 2",
        slug: "category-2",
        productsCount: 15,
        children: [
          {
            id: 5,
            name: "Category 2.5",
            slug: "category-2-5",
            productsCount: 14,
            children: [
              {
                id: 6,
                name: "Category 2.5.6",
                slug: "category-2-5-6",
                productsCount: 13,
              },
            ],
          },
        ],
      },
    ]
  }
  return data;
}
