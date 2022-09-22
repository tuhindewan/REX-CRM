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
