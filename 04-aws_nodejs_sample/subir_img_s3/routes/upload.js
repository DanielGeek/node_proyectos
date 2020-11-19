const fs = require('fs');
const AWS = require('aws-sdk');
require('../config/key');
const express = require('express');
const app = express();

const mysqlConnection  = require('../database.js');

// GET credenciales
mysqlConnection.query('SELECT * FROM usuario_aws', (err, rows, fields) => {
  if(!err) {
    if(rows[0]){
      key_id = rows[0].key_id;
      key_password = rows[0].key_password;
      
     s3 = new AWS.S3({
        accessKeyId: key_id,
        secretAccessKey: key_password
      });
    }
    
  } else {
    console.log(err);
    return;
  }
});


// const s3 = new AWS.S3({
//     accessKeyId: ID,
//     secretAccessKey: SECRET
// });

 const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);
    // obtener peso de la img en bytes
    tamano = fs.statSync(fileName).size
    
    // Comprobamos que el fichero es de tipo imagen
    var filePath = fileName;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        console.log('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        return;
    }else if (tamano > 500000) // si es mayor a 500Kb
    {
        console.log('El peso de la imagen no puede exceder los 500kb el tamaño es: ',tamano)
        return;
    }
    else{
      console.log('es imagen con buen peso',tamano);
    }
    
    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'carpeta_publica/cat.png', // File name you want to save as in S3
        Body: fileContent,
        ACL: FILE_PERMISSION
    };

    // Uploading files to the bucket
    var s3upload = s3.upload(params).promise();
    return s3upload
        .then(function(data) {
            console.log(data);
            return data.Location;
        }).catch(function(err) {
            return handleError(err);
        });
};

  
// INSERTAR  IMG en S3
app.post('/upload', async (req, res) => {
    img = await uploadFile('cat.png');
    if(img === undefined){
      res.json({status: 'imagen muy grande'});
      return;
    }
    
    const { name, salary} = req.body;
    console.log( name, salary, img);

    const query = `INSERT INTO employee(name,salary,img)
            VALUES(?,?,?)`;
    mysqlConnection.query(query, [name, salary, img], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'empleado guardado'});
    } else {
      console.log(err);
    }
  });
});


module.exports = app;
// exporto a index.js