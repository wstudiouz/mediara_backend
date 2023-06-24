module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("URL", "http://13.53.127.78:1337"), // Update the URL to match your desired endpoint
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "a1b2c3d4e5f6g7h8i9j0"), // Update the secret key if needed
    },
  },
});
