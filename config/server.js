module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("URL", undefined),
  settings: {
    cors: {
      enabled: true,
      origin: ["*"], // Replace with your desired allowed origins
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "Origin",
        "X-Requested-With",
        "Accept",
      ],
    },
  },
});
