const app = require("./app");
// const express = require("express");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`server listening port ${port}`);
  }
});
