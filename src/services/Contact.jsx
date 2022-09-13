// Return Contacts from the database
export function getContacts() {
    return fetch(window.MRM_Vars.api_base_url + `mrm/v1/contacts/`)
        .then( (response) => {
            if( response.ok ){
                return response.json()
            }
        })
        .then( (data) => {
            if( 200 == data.code ){
                return data.data;
            }
        })
}
// Delete a single contact
export function deleteSingleContact(id){
    return fetch(window.MRM_Vars.api_base_url + `mrm/v1/contacts/${id}`, {method: 'DELETE'})
        .then((response) => {
            if (200 === response.status){
                return response;
            }
        });
}