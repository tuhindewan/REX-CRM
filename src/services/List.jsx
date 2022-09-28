// Return Lists from the database
export async function getLists() {
  return fetch(window.MRM_Vars.api_base_url + "mrm/v1/lists/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (200 === data.code) {
        console.log(data.data);
        return data.data;
      }
    });
}

// List delete request
export async function deleteSingleList(id) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/lists/${id}`, {
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

// Multiple lists delete request
export async function deleteMultipleListsItems(selected) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/lists/`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      list_ids: selected,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}
