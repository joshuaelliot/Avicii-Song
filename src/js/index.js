
/*
const iframe= document.querySelector("iframe");
    const btnBuscar= document.querySelector("#search");
    const inputAlbum=document.querySelector(".album");
    const inputCancion=document.querySelector("#cancion");

    const url="https://avicii.onrender.com/api/v1/avicii";

    async function solicitudDatos() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new error("Error no se pudo obtener los datos")
        }
        const data = await response.json();
        return data
      } catch (error) {
        console.error(error)
      }
    };

    async function solicitudApi(){
      try{
        const obtenerDatos = await solicitudDatos();
      console.log(obtenerDatos);

      }catch(error){
        console.log(error)
      }
    }

     function pedir(NombreAlbum,NombreCancion){
      let albumes= undefined;

       fetch(url+"/albumes")
      .then(res=>res.json())
      .then((res)=>{
        console.log(res)
        albumes = res
        const album= albumes.find((Album)=>{
          return NombreAlbum.toLowerCase() == Album.album.toLowerCase()
        });
        const cancion = album.canciones.find((cancion)=>{
          return NombreCancion.toLowerCase() == cancion.nombre.toLowerCase()
        })
        iframe.src= cancion.link;

      })


    }

   
    //solicitudApi();

    btnBuscar.addEventListener("click",()=>{
      const album = inputAlbum.value;
      const cancion = inputCancion.value;
      
      if(album && cancion !== undefined){
        pedir(album,cancion);
      }else{
        console.log("ingresa un nombre valido")
      }
      
     
    })*/

    const urlAlbums="http://avicii.onrender.com/api/v1/avicii/albumes"

    const cardsAlbums= document.querySelectorAll(".card-album");

    import tomarAlbums from "./mostrarAlbums.js"

console.log("respuesta recibida",cardsAlbums)
    const recibido =  await tomarAlbums(urlAlbums);

    const nombresAlbumes= recibido.map((album)=>{
      if( album.album ){
        return album.album
      }else{
        return "no hay "
      }
    });
    const imagenesAlbumes = recibido.map((album)=>{
      if(album.portadaAlbum){
        return album.portadaAlbum
      }else{
        return "no hay "
      }
    });

    let index =0;
   for(const cardAlbum of cardsAlbums){
    //asignamos las portadas a los albums 
    cardAlbum.children[0].src = imagenesAlbumes[index];
    //asignamos los nombres de los albums
    cardAlbum.children[1].children[0].textContent=nombresAlbumes[index];
    //asignamos los nombres de artistas de cada album
    cardAlbum.children[1].children[1].textContent = "Avicii";
   index++
   }

    //console.log("probando recibido",recibido)
   /* cardsAlbums[0].children[0].src="https://www.lahiguera.net/musicalia/artistas/avicii/disco/9819/avicii_tim-portada.jpg"*/

    //cardsAlbums[0].children[1].children[0].textContent=nombresAlbumes[0];
//console.log(cardsAlbums[0].children[1].children[0].textContent)
    console.log("canciones",nombresAlbumes)

