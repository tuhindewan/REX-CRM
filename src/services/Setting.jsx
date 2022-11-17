// POST request to store double opt-in on options table
export async function submitOptin(optin) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/settings/optin`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(optin),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

// GET request to get double opt-in settings
export async function getOptinSettings() {
  return await fetch(
    `${window.MRM_Vars.api_base_url}mrm/v1/settings/optin`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

// GET request to get all pages from native WP
export async function getAllWpPages() {
  return await fetch(`${window.MRM_Vars.api_base_url}wp/v2/pages`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
    }
  );
}
