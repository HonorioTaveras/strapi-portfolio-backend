module.exports = ({ env }) => ({
  // example: you can include other plugin config here
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
});
