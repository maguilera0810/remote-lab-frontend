// cookieUtils.ts
import Cookies, {CookieSetOptions} from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options: object = { path: "/" }) => {
  cookies.set(name, value, options);
};

export const getCookie = (name: string, options: object = { path: "/" }) => {
  return cookies.get(name, options);
};

export const removeCookie = (name: string, options: CookieSetOptions = { path: "/" }) => {
  cookies.remove(name, options);
};

export const removeAllCookies = (options: object = { path: "/" }) => {
  const allCookies = cookies.getAll(options);
  Object.keys(allCookies).forEach(cookieName => {
    removeCookie(cookieName);
  });
};