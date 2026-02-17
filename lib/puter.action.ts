import puter from '@heyputer/puter.js';

export const signIn = async () => await puter.auth.signIn();
export const signOut = () => puter.auth.signOut();

export const getCurrentUser = async () => {
  const signedIn = puter.auth.isSignedIn();
  if (!signedIn) return null;

  return await puter.auth.whoami();
};
