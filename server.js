const express = require('express');
const pictureRoutes = require('./src/picture/routes');
const picture = require('./src/picture/controller');

const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');

const app = express();
const port = 3000;

const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Pictures API',
            version:'1.0.0',
            description:'Pictures Api for social network',
            contact:{
                name:'Dimitri Ollivier',
                email:'dimitri.ollivier14@gmail.com'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["server.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome on board");
})

app.use("/api/v1/pictures", pictureRoutes);

app.listen(port, () => console.log(`serveur en cours d\'exécution sur le port ${port}`));

app.use(express.json());
/**
 * @swagger
 * definitions:
 *  Picture:
 *   type: object
 *   properties:
 *    id:
 *     type: number
 *     description: id
 *     example: '15'
 *    createdat:
 *     type: date
 *     description: date of creation of the pictures
 *     example: '2021-12-15'
 *    name:
 *     type: string
 *     description: name of the picture
 *     example: 'fleur'
 *    picture:
 *     type: string
 *     description: data picture
 *     example: ''
 */


/**
 * @swagger
 * /picture:
 *  post:
 *   summary: create picture
 *   description: create picture for the social network
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Picture'
 *   responses:
 *    200:
 *     description: picture created succesfully
 *    500:
 *     description: failure in creating picture
 */
app.post("/pictures", (req, res) => {
    res.status(200).send("Picture results");
});
/**
 * @swagger
 * /pictures:
 *  get:
 *   summary: get all pictures
 *   description: get all pictures
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get("/pictures", (req, res) => {
    res.status(200).send("Picture results");
});

app.get("/pictures/:id", (req, res) => {
    res.status(200).send("Picture results");
});

/**
 * @swagger
 * /picture/{picture_id}:
 *  delete:
 *   summary: delete picture
 *   description: delete picture
 *   parameters:
 *    - in: path
 *      name: picture_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the picture
 *      example: 15
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/pictures/:id", (req, res) => {
    res.status(200).send("Picture results");
});