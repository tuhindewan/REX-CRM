// Return all custom fields from the database
export function getCustomFields() {
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
