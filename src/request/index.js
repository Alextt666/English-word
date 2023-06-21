const BASE_URL = import.meta.env.VITE_BASE_URL;

// 查询所有
export function getAllWord() {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/api/words/getWords")
      .then((res) => res.json())
      .then((res) => {
        resolve(res.data);
      });
  });
}
