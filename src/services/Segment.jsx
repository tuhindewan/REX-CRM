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

// List delete request
export async function deleteSingleSegment(id) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/segments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}
