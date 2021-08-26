import { ForbiddenError } from 'apollo-server-errors';
import { initializeApp, credential, auth } from 'firebase-admin';

const { FIREBASE_PROJECT_ID, FIREBASE_DATABASE_URL, KANBAN_DOMAIN } =
  process.env;

initializeApp({
  projectId: FIREBASE_PROJECT_ID,
  credential: credential.applicationDefault(),
  databaseURL: FIREBASE_DATABASE_URL,
});

export const verify = (token: string): Promise<auth.DecodedIdToken> => {
  try {
    return auth().verifyIdToken(token.replace('Bearer ', ''));
  } catch (error) {
    throw new ForbiddenError('Unauthorized');
  }
};

export const findTokenEmail = ({ email, sub }: auth.DecodedIdToken) => {
  return email || `anonymous+${sub}@${KANBAN_DOMAIN}`;
};

export const isAnonymous = (decoded: auth.DecodedIdToken) => {
  return decoded.firebase.sign_in_provider !== 'anonymous';
};
