module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    settings: {
      cors: {
        enabled: true,
        origin: ["*"],
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
