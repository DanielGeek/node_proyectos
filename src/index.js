import app from './app';

async function main() {
    await app.listen(4000);
    console.log('Servidor en el puerto 4000');
}

main();