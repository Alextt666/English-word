export default [
  {
    url: "/api/getWords",
    method: "get",
    response: () => {
      return {
        code: 0,
        data: [
          {
            url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/45a9e1ad-ce9c-43e7-a1f0-89daf2b5848a/width=2048/00014-2116310968.jpeg",
            word: "Some Word",
          },
          {
            url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d0f25272-31f5-4390-b112-a5f71ec33640/width=450/31a84837854ebed8fa7c4158e97c0f4.jpeg",
            word: "other word",
          },
        ],
      };
    },
  },
];
