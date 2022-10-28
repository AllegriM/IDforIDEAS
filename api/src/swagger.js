const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path")
//Metadata info about out API

const options = {
  definition: {
    openapi: "3.0.0",
    info: { 
        title: "Pizzeria API", 
        version: "1.0.0" },
  },
  apis: [path.join(__dirname,"./routes/*.js")]
};

//Docs on JSON format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup out docs
const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req, res) => {
    res.json(swaggerSpec);
  });

  console.log(`API Docs are available at http://localhost:${port}/api/docs`);
};

module.exports = { swaggerDocs };
