// Return Lists to index page from the database based on query params
export async function getAllSegments(orderBy, orderType, page, perPage, query) {
  return fetch(
    `${window.MRM_Vars.api_base_url}mrm/v1/segments?order-by=${orderBy}&order-type=${orderType}&page=${page}&per-page=${perPage}${query}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}
