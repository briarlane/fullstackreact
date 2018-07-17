// production keys heres
module.exports = {
  GoogleClientID: process.env.GOOGLE_CLIENT_ID,
  GoogleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  oauthCallback: process.env.OAUTH_CALLBACK,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
