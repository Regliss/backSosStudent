module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ceee037508834c56ea68156fa0ce563d'),
  },
});
