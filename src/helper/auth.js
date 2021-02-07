import cookie from "js-cookie";

export const setCookie = (key, value) => {
  if (window !== "undifiend") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (window !== "undifiend") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  if (window !== "undifiend") {
    return cookie.get(key);
  }
};

export const setLocalStorage = (key, value) => {
  if (window !== "undifiend") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (window !== "undifiend") {
    localStorage.removeItem(key);
  }
};

export const authencate = (response, next) => {
  setCookie("token", response.data.user);
  setLocalStorage("user", response.data.user);
  next();
};

export const sigout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
};

export const isAuth = () => {
  if (window !== "undifiend") {
    const cookieCheked = getCookie("token");
    if (cookieCheked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export const updateUser = (response, next) => {
  if (window !== "undifiend") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
