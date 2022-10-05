// @ts-nocheck
import { error } from "@sveltejs/kit";
import { request, gql } from "graphql-request";
import { page } from '$app/stores'

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params, url }) {
//   console.log("load", url.searchParams.get("ids"));
  for (const [key, value] of url.searchParams) {
    console.log(`${key}=${value}`);
  }
  if (params.slug === "") {
    throw error(404, "Not found");
  }

  const endpoint = "http://127.0.0.1:8000/graphql";
  const query = gql`
    query Category($slug: String!) {
      category(slug: $slug) {
        id
        name
        slug
        productsCount
        ancestors {
          id
          name
          slug
        }
        children {
          id
          name
          slug
        }
      }
    }
  `;
  const variables = {
    slug: params.slug,
  };
  const data = request(endpoint, query, variables);
  return data;
}
