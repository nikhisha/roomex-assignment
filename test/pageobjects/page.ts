import { Locale } from "./types";

export default class Page {
    public open (path: string, locale : Locale) {
        if(locale === "en-GB"){
            return browser.url(`https://qa.roomex.com/${path}`);
        }
    }
}
