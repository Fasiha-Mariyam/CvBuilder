export const validateName = (name) => {
  const regex = /^(?![0-9])[a-zA-Z]+$/;
  return regex.test(String(name));
};

export const validateEmail = (email) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const getStorageItem = async (key) => {
  try {
    let item = await localStorage.getItem(key);
    return item ? JSON.parse(item) : item;
  } catch (e) {
    console.log("Error in getting key -->", e);
    return null;
  }
};

export const setStorageItem = async (key, value) => {
  try {
   await localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log("Error in setting key -->", e);
    return null;
  }
};