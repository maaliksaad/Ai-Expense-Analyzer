const ROOT = "/";

// auth
const SIGN_IN = "sign-in";
const SIGN_UP = "sign-up";

export const ABSOLUTE_ROUTES = {
  Home: ROOT,

  // auth
  SignIn: `${ROOT}${SIGN_IN}`,
  SignUp: `${ROOT}${SIGN_UP}`,
} as const;
