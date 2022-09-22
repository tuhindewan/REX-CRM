// Campaign submit post request
export async function submitCampaign(campaign) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/campaigns`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(campaign),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

// Campaign delete request
export async function deleteSingleCampaign(id) {
  return await fetch(
    `${window.MRM_Vars.api_base_url}mrm/v1/campaigns/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}


// Return all campaigns from the database
export async function getAllCampaigns() {
  return fetch(window.MRM_Vars.api_base_url + "mrm/v1/campaigns/")
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
