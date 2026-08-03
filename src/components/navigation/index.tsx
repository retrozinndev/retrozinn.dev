import ToggleThemeButton from "../ToggleThemeButton";
import LanguagePicker from "../languagepicker";
import { useEffect, type ReactElement } from "react";
import { useTranslations } from "../../i18n/utils";
import { defaultLang } from "../../i18n/ui";
import Avatar from "../Avatar";
import CenterBox from "../centerbox";
import "./style.scss"


interface Props extends React.HTMLAttributes<HTMLElement> {
    lang?: string;
    showLanguageSelector?: boolean;
    showProfilePic?: boolean;
};

type Page = {
    name: string;
    href: string|URL;
    hasI18n?: boolean;
};

const pages: Array<Page> = [
    {
        name: "home",
        href: "/#",
        hasI18n: true
    },
    {
        name: "about",
        href: "/about",
        hasI18n: true
    },
    {
        name: "stack",
        href: "/stack",
        hasI18n: true
    },
    {
        name: "projects",
        href: "/projects",
        hasI18n: true
    }
];

export default function Navigation(props: Props): ReactElement {
    props.lang ??= defaultLang;
    const tr = useTranslations(props.lang);

    useEffect(() => {
        function handleScroll() {
            const navigation = document.getElementById("topNavigation")!;
            if(window.scrollY >= 5) {
                !navigation.classList.contains("scrolled") &&
                    navigation.classList.add("scrolled");
                return;
            }

            navigation.classList.contains("scrolled") &&
                navigation.classList.remove("scrolled");
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);
    });


    return <CenterBox className="navigation" id="topNavigation">
        <div id="start">
            <Avatar className="avatar" size={32} 
              hidden={!props.showProfilePic}
            />
            <a className="name" onClick={() => {
                window.scroll({
                    behavior: "smooth",
                    top: 0
                });
            }}>
                retrozinn<span className="tld">.dev</span>
            </a>
        </div>
        <nav id="middle" aria-label="Navigation Bar">
            {pages.map((page, i) => 
                <a className="item" key={i}
                  href={`${page.hasI18n ? `/${props.lang}` : ""}${page.href}`} target="_self" 
                  title={tr(`nav.${page.name}_tooltip`)}>

                    {tr(`nav.${page.name}`)}
                </a>
            )}
        </nav>
        <div id="end">
            <ToggleThemeButton />
            <LanguagePicker hidden={props.showLanguageSelector} 
              defaultLanguage={props.lang} 
            />
        </div>
    </CenterBox>;
}
