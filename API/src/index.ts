import express from 'express'
//import cardRouter from './routes/cards'
import Cuenta from './Cuenta'
import admin from './routes/admin'

//const { v4: uuidv4 } = require('uuid');//creo que me falto algo 


const app = express()
app.use(express.json()) //middleware

  //npm run dev
  //npm start             este no se porque no me acepta los metodos y el otro si

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running 123 on port ${PORT}`)
});

const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
};

app.use(cors(corsOptions));
////////////////////////////////////////////////////////////

/* JWT *////////////////////////////////////////////////////
export const jwt = require('jsonwebtoken');

export function generateAccessToken(usuario: string) {
    return jwt.sign({ usuario: usuario }, 'miClaveSecreta', { expiresIn: '1h' });
}


export function authenticate(req: any, res: any, next: any) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
      return res.status(401).send({ message: "Unauthorized" });
  } else {
      const token: string = authorizationHeader.split(' ')[1];
      try {
          jwt.verify(token, 'shhhhh');
          next();
      } catch (err: any) {
          if (err.name === 'TokenExpiredError') {
              res.status(401).send({ message: "TokenExpiredError" });
          } else {
              const error = new Error("Error! Something went wrong.");
              return next(error);
          }
      }
  }
}


app.get('/test', (req, res) => {    
    console.log("hello world");
    res.send('V 1.1')
});

/*app.get('/probandocosas', (req, res) => {    
    console.log("HOLA MUNDO HERMOSO");
    res.send('PROBANDO EL PROGRAMA')
});


let cards: any[] = [];

app.post('/card', (req, res) => {   
    let card = {
      id: uuidv4().toString(),
      text: req.body.text,
      description: req.body.description
    }
    cards.push(card) 
    res.send(card);
  });

  app.get('/card', (req, res) => {
    res.send(cards);
  });

  let newcards: any[]=[];

  app.post('/newcard', (req, res) => {   
    let card = {
      text: req.body.text,
      description: req.body.desc //la primera parte es como se ve y la segunda osea desc es como hay que ponerla en el JSON
    }
    newcards.push(card) 
    res.send(newcards);
  });

  app.get('/newcard', (req, res) => {
    res.send(newcards);
  });

  //Aca vamos a ver que funcionen bien los status y condiciones
  app.get('/ejemplo', (req, res) => {
    const parametro = req.query.estado; // Obtiene el parámetro 'estado' de la URL
  
    if (!parametro) {
      // Si no se proporciona el parámetro 'estado', se establece el código 400 (Solicitud incorrecta)
      //el parámetro se proporciona de la siguiente manera: http://localhost:3000/ejemplo?estado=PARÁMETRO
      res.status(400).send('Debe proporcionar el parámetro "estado".');
    } else if (parametro === 'exito') {
      // Si el parámetro 'estado' es 'exito', se establece el código 200 (Éxito)
      res.status(200).json({ message: 'Operación exitosa.' });
    } else if (parametro === 'prohibido') {
      // Si el parámetro 'estado' es 'prohibido', se establece el código 403 (Prohibido)
      res.status(403).send('Acceso prohibido.');
    } else {
      // Para cualquier otro valor de 'estado', se establece el código 404 (No encontrado)
      res.status(404).send('Recurso no encontrado.');
    }
  });

  
//ACA ARRANCA EL OBLIGATORIO, CREATE SCREEN

app.use('/api/cards', cardRouter)//el que ellos nos dieron
//
//            
//
*/
const usuario = new Cuenta('','');
  
  const cuentas:Cuenta[]=[];
    app.post('/crearCuenta', (req, res) => {   
    let cuenta = new Cuenta(req.body.mail, req.body.pass)

    /*if(cuentas.includes(req.body.mail)){ //aca no me da true nunca no se porq
      res.send("La direccion de correo electrónico proporcionada ya esta en uso")
  }*/

    let enviado = false
    cuentas.forEach((elemento)=>{
      if(elemento.gmail==req.body.mail){ //aca me compara gmail con gmail
        console.log("LA CUENTA "+ req.body.gmail +" YA EXISTE")
        console.log("Este es el body:")
        console.log(req.body)
        console.log(req.body.mail+" --- "+req.body.pass+" y el gmail es "+elemento.gmail) //si pongo mail en vez de gmail sale undefinded y lo mismo si pongo password en vez de pass(pass es al buena)
        res.status(200).send("La direccion de correo electrónico proporcionada ya esta en uso")           // Además si los sumo sin nada en medio la ser una suma de 2 undefined sale NaN
        enviado = true
      }
    });

    if(!enviado){
      if(verificarContraseña(req.body.pass)){

        cuentas.push(cuenta)
        const token = generateAccessToken(req.body.usuario);
        res.status(200).send({ token: token });

        //res.status(200).send("Cuenta creada exitosamente\n"+JSON.stringify(cuentas));
        //console.log("probando el metodo")
        //res.send("Cuenta creada exitosamente")
      }
      else {
        res.send('Su contraseña debe tener al menos 8 caracteres')
      }
      
    }

    
  });

  
  app.get('/cuenta', (req, res) => {
    //SI ASIGNO LOS VALORES DE LA SIGUIENTE MANERA POR ALGUNA RAZON NO SIRVE
    // const { mail, pass } = req.query; // Obtén los valores de mail y pass de la solicitud GET
    const mail = req.body.mail
    const pass = req.body.pass
    console.log("prueba")
    console.log(mail)
    console.log(pass)
    console.log(req.body.mail)


    // Busca una cuenta que coincida con los valores proporcionados
    const cuentaEncontrada = cuentas.find((cuenta) => cuenta.gmail == mail && cuenta.password == pass);
  
    if (cuentaEncontrada) {
      console.log("Cuenta encontrada")
      res.send(cuentaEncontrada);
      usuario.gmail=cuentaEncontrada.gmail
      usuario.password=cuentaEncontrada.password
      usuario.activities=cuentaEncontrada.activities
    } else {
      res.status(404).send("Cuenta no encontrada");
      console.log("NOOOO")
    }
  });

  

  function verificarContraseña(campo: string): boolean {
    return campo.length >= 8;
  }

  app.use('/admin',admin)
  
export default usuario
  
