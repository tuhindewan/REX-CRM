// Return Lists from the database
export function getLists() {
    return fetch(window.MRM_Vars.api_base_url + "mrm/v1/lists/")
        .then( (response) => {
            if( response.ok ){
                return response.json()
            }
        })
        .then( (data) => {
            if( 200 === data.code ){
                return data.data;
            }
        })
}