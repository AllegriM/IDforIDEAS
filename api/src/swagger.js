const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metadata info about out API

const options = {
  definition: {
    openapi: "3.0.0",
    info: { 
        title: "Pizzeria API", 
        version: "1.0.0" },
  },
  apis: ["./routes/*.js"],
};

//Docs on JSON format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup out docs
const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/focs.json", (req, res) => {
    res.json(swaggerSpec);
  });

  console.log(`API Docs are available at http://localhost:${port}/api/docs`);
};

module.exports = { swaggerDocs };
