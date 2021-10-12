let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  //database = require("./database"),
  bodyParser = require("body-parser");
  const studentAPI = require("../backend/routes/student.route");
  const app = express();

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );  
  /* const user='UserAnn';
  const password='fm2HzCgTAJXs1pGV';
  const dataB='vuecrudmevn'; */

  /* const user='proyectoasistencias';
  const password='123asistencias';
  const dataB='DatabaseProyect'; */

  //const uri=`mongodb+srv://${user}:${password}@cluster0.y3w80.mongodb.net/${dataB}?retryWrites=true&w=majority`;
const uri=`mongodb+srv://ProyAsis:123Asis@cluster0.gas8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// Connect mongoDB
/*mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );*/
  mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true})
  .then(db => console.log('Base de datos conectada'))
  .catch(err => console.error(err)); 

app.use(cors());

// API
app.use("/api", studentAPI);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Puerto escuchando " + port);
});

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
/* app.use(function(err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
}); */

app.get("/", ( req, res)=> {
  const datos={
      msg: 'hola mundo',
      status: false
  }
  res.send ( datos)
})

