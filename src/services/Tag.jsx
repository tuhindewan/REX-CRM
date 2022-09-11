//Return tags from tha database
export function getTags() {
    return fetch(window.MRM_Vars.api_base_url + "mrm/v1/tags/")
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