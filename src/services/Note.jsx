// Custom fields submit post request
export async function submitNote(note, contactID) {
  return await fetch(
    `${window.MRM_Vars.api_base_url}mrm/v1/contact/${contactID}/notes`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}
