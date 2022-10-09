// @ts-nocheck
import { request, gql } from "graphql-request";

/** */
export function load() {
  const query = gql`
    {
      rockets(limit: 10) {
        name
        id
        active
      }
    }
  `;
  const data = request("https://api.spacex.land/graphql/", query);

  return data

}
