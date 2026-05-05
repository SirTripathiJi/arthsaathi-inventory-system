
export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getData = (key) => {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error parsing data from localStorage", error);
    return [];
  }
};
