
import { languages, i18n, defaultLang } from "./ui.ts";

export function getLanguageFromURL(url: URL): string {
    var splittedURL: string[] = url.pathname.split("/");
    var currentIntl: string = splittedURL[1]; // Gets the second URL part

    if(currentIntl in i18n) 
        return currentIntl as keyof typeof i18n;

    return currentIntl as string;
}

export function useTranslations(lang: keyof typeof i18n): Function {
    return function tr(key: string): string {
        const keys = key.split(".");
        let translation = i18n[lang], defaultTranslation = i18n[defaultLang];

        keys.forEach(key => {
            translation = translation[key];
            defaultTranslation = defaultTranslation[key];
        });

        return translation || defaultTranslation || "Couldn't find key to translate.";
    }
}

export function getLanguages() {
    return languages;
}