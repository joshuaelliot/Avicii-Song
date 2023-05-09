

 export default async function tomarAlbums(url){

    let albums = undefined;
    const llamadoApi= await fetch(url);
    const respuestaApi= await llamadoApi.json();
    if(respuestaApi!= undefined){
        console.log(respuestaApi)
        return respuestaApi
    }
}
