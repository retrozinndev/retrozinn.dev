
import { en } from"./en.ts";
import { pt } from "./pt.ts";

export let i18n: object = { 
    en: {
        ...en
    },
    pt: {
        ...pt
    }
};

export const languages: Array<string> = Object.keys(i18n);
export const defaultLang = "en" as keyof typeof i18n;
