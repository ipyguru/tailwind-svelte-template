import { request, gql } from "graphql-request";

/** @type {import('./$types').PageLoad} */
export function load() {
  const query = gql`
    {
      categories(level:0) {
        id
        name
        slug
        productsCount
        children {
          id
          name
          slug
          productsCount
          children {
            id
            name
            slug
            productsCount
          }
        }
      }
    }
  `;
  const data = request("http://127.0.0.1:8000/graphql", query);
  return data;
}
