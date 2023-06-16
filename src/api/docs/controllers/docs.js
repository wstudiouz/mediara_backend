"use strict";

const fs = require("fs");

module.exports = {
  index: async (ctx) => {
    const documentation = fs.readFileSync(
      "src/extensions/documentation/documentation/1.0.0/full_documentation.json",
      "utf8"
    );
    const response = JSON.parse(documentation);
    ctx.send(response);
  },
};
