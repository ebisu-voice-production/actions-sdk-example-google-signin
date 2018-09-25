const functions = require('firebase-functions');
const actionsOnGoogle = require('actions-on-google');

const clientId = functions.config().client.id;
if (!clientId) {
  throw new Error(
    'You should set clientId by : $ firebase functions:config:set client.id="client id set by project console"'
  );
}
const app = actionsOnGoogle.actionssdk({ clientId });
const SignIn = actionsOnGoogle.SignIn;

const mainIntent = (conv) => {
  conv.ask('Hi Hi! Can you say something? If you wish to be called your name, please say sign in.');
};

const subIntent = (conv, rawInput) => {
  if (rawInput === 'bye') {
    conv.close('Goodbye!');
  } else if (rawInput === 'sign in') {
    conv.ask(new SignIn('To get your account details'));
  } else {
    const subject = (conv.user.profile.payload && conv.user.profile.payload.name) || 'You';
    conv.ask(`${subject} said, ${rawInput}. Can you say something?`);
  }
};

const signInIntent = (conv, rawInput, signin) => {
  if (signin.status === 'OK') {
    const payload = conv.user.profile.payload;
    conv.ask(`I got your account details, ${payload.name}. Can you say something?`)
  } else {
    conv.ask(`I won't be able to save your data, but can you say something?`)
  }
};

app.intent('actions.intent.MAIN', mainIntent);
app.intent('actions.intent.TEXT', subIntent);
app.intent('actions.intent.SIGN_IN', signInIntent);

exports.googleSignInSample = functions.https.onRequest(app);
