import { ForbiddenError } from 'apollo-server-errors';
import { initializeApp } from 'firebase-admin/app';
import { auth } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

initializeApp();

export const verify = (token: string): Promise<DecodedIdToken> => {
  try {
    return auth().verifyIdToken(token.replace('Bearer ', ''));
  } catch (error) {
    throw new ForbiddenError('Unauthorized');
  }
};

export const findTokenEmail = ({ email, sub }: DecodedIdToken) => {
  return email || `anonymous+${sub}@${process.env.KANBAN_DOMAIN}`;
};

export const isAnonymous = (decoded: DecodedIdToken) => {
  return decoded.firebase.sign_in_provider !== 'anonymous';
};
