/**
 *  Async Await
 */


// let getNombre = async() => {

//     return 'Daniel';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Daniel');

        }, 3000);

    });
}


let saludo = async() => {

    let nombre = await getNombre();


    return `Hola ${ nombre }`;

}


saludo().then(mensaje => {
    console.log(mensaje);
})