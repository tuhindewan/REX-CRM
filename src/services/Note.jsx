// Contact note submit post request
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

// Contact note delete request
export async function deleteSingleNote(noteId, contactId) {
  return await fetch(
    `${window.MRM_Vars.api_base_url}mrm/v1/contact/${contactId}/notes/${noteId}`,
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

// Get request for a single contact note
export async function getSingleNote(noteId, contactId) {
  console.log(noteId);
  return await fetch(
    `${window.MRM_Vars.api_base_url}mrm/v1/contact/${contactId}/notes/${noteId}`,
    {
      method: "GET",
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
