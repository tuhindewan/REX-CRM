// Return all custom fields from the database
export async function getCustomFields() {
  return fetch(window.MRM_Vars.api_base_url + "mrm/v1/custom-fields/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (200 === data.code) {
        return data.data;
      }
    });
}

// Custom fields submit post request
export async function submitCustomFields( customFields ) {

  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/custom-fields`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(customFields),
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}