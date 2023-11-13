import express from 'express'
import cardRouter from './routes/cards'

const { v4: uuidv4 } = require('uuid');//creo que me falto algo 


const app = express()
app.use(express.json()) //middleware

  //npm run dev
  //npm start             este no se porque no me acepta los metodos y el otro si

const PORT = 3000

app.get('/test', (req, res) => {    
    console.log("hello world");
    res.send('V 1.1')
});

app.get('/probandocosas', (req, res) => {    
    console.log("HOLA MUNDO HERMOSO");
    res.send('PROBANDO EL PROGRAMA')
});

app.use('/api/cards', cardRouter)

app.listen(PORT, () => {
    console.log(`Server running 123 on port ${PORT}`)
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

  
//ACA ARRANCA EL OBLIGATORIO

const cuentas:any[]=[];
app.post('/crearCuenta', (req, res) => {   
    let cuenta = {
      gmail: req.body.mail,
      password: req.body.pass //la primera parte es como se ve y la segunda osea desc es como hay que ponerla en el JSON
    }
    if(cuentas.includes(req.body.mail)){
        res.send("La direccion de correo electrónico proporcionada ya esta en uso")
    }
    cuentas.push(cuenta) 
    res.status(200).send("Cuenta creada exitosamente\n"+JSON.stringify(cuentas));
    console.log("probando el metodo")
    //res.send("Cuenta creada exitosamente")
    
  });