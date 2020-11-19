const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'tu access ID';
const SECRET = 'tu secret key';


// Now, we need to initialize the ComprehendMedical interface by passing our access keys:
const comprehendmedical = new AWS.ComprehendMedical({
    accessKeyId: ID,
    secretAccessKey: SECRET,
    region: 'us-east-1',
    LanguageCode: 'es',
});

const params = {
    Text: 'Paciente portadora de una diabetes mellitus, controlada con régimen (que sigue en forma irregular), e hipoglicemiantes orales. Desde hace unos dos a tres meses presenta polidipsia, poliuria y ha bajado de peso. Las veces que se ha controlado la glicemia, ha estado sobre 200 mg/dL. Desde tres días atrás comenzó a notar disuria dolorosa y poliaquiuria. También ha sentido un dolor sordo ubicado en la región lumbar derecha y cree haber tenido fiebre, pero no se la ha registrado. La orina la ha notado más fuerte de olor.'
};

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ComprehendMedical.html#detectEntitiesV2-property
comprehendmedical.detectEntitiesV2(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    // else     console.log(data['Attributes']);           // successful response
    if(data){
        data['Entities'].forEach(element => { 
            console.log(element); 
          });
    }
  });

// ir a la consola y ejecutar el comando node comprehendMedical.js