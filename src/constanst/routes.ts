const ROOT = "/";
const ABOUT = "about";
const CONTACT = "contact";

// auth
const SIGN_IN = "sign-in";
const SIGN_UP = "sign-up";

export const ABSOLUTE_ROUTES = {
  Home: ROOT,
  About: `${ROOT}${ABOUT}`,
  Contact: `${ROOT}${CONTACT}`,

  // auth
  SignIn: `${ROOT}${SIGN_IN}`,
  SignUp: `${ROOT}${SIGN_UP}`,
} as const;
