export const lang = {
    it: {
      home: "home",
      about: "su di noi",
      contact: "contatti",
      blog: "blog",
    },
    en: {
      home: "home",
      about: "about",
      contact: "contact",
      blog: "blog",
    },
  } as const;
  
  export type Lang = keyof typeof lang;
  export type KeyOfLang = keyof (typeof lang)[Lang];
  