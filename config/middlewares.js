module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    load: {
      before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
      order: [],
      after: ["parser", "router"],
    },
    settings: {
      cors: {
        enabled: true,
        origin: ["https://madeira.netlify.app"], // Allow requests from this specific origin
      },
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
