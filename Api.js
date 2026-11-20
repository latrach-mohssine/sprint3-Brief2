export async function request(method,route,body){ 
   const BASE_URL = `http://localhost:3000`
let url = `${BASE_URL}${route}`
const options = {
    method: method
}
try{ 
    const response = await fetch(url, options)
     if (!response.ok) {
    throw new Error("not found");
  }
  const character = await response.json();
  return character;
}catch(error){
    throw error}

}


export async function getPokimons() {
const caracters =await request("GET", "/caracters")

return caracters

}
export async function getPokimon(namePok) {
const caracter = await request("GET",`/caracters?q=${namePok}`)
if(typeof(caracter) !=="object"){
    return []
}
return 
}
