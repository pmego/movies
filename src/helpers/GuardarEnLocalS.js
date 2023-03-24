
export const GuardarEnLocalS = (key, elemento) => {
    //Conseguir los elementos que tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(key));

    //Comprobar si es un array
    Array.isArray(elementos)
        //si cumple, añade un nuevo elemento nuevo dentro del array
        ? elementos.push(elemento)
        //Sino, crea un array con la nueva peli
        : elementos = [elemento];

    //Guardar en el local storage
    localStorage.setItem(key, JSON.stringify(elementos));

    //Devolver el objeto guardado
    return elemento;
}
