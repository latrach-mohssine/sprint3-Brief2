export function request(method,route,body){ 
   const BASE_URL = `http://localhost:3000/`
let url = `${BASE_URL}${route}`
const options = {
    method: method
}

}


export async function getPokimons() {
  const URL_API = "http://localhost:3000/caracters";
try{  const response = await fetch(URL_API);
 
   if (!response.ok) {
    throw new Error("not found");
  }
   const caracters = await response.json();
     return caracters;
}catch(error){
    throw error
}




}
export async function getPokimon(namePok) {

  try {
    const responses = await fetch(
      `http://localhost:3000/caracters?q=${namePok}`,
    );
    const datas = await responses.json();
     if (!responses.ok) {
    console.log(namePok);
    return [];
  }
  } catch (error) {
    console.log(error);
    return  [];
  }

 

}
