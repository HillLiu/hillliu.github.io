import { useEffect } from "react";
import PortfolioThemes from "pmvc_react_portfolio";
import { ClientRoute, disableHandleAnchor, getAnchorPath } from "reshow-url";
import { ajaxDispatch } from "organism-react-ajax";
import { getUrl } from "seturl";
import { sessionStorage } from "get-storage";
import { win } from "win-doc";
import { getEventKey } from "call-func";
import query from "css-query-selector";

const themes = {
  ...PortfolioThemes,
};

const Index = ({ themePath, ...props }) => {
  useEffect(() => {
    const sourceSession = sessionStorage("source");
    let source = sourceSession() || getUrl("source");
    if (!source) {
      const url = document.location;
      const gitName =
        getUrl("gitName", getAnchorPath().path) ?? url.hostname.split(".")[0];
      if (gitName && "localhost" !== gitName) {
        source =
          "https://raw.githubusercontent.com/" +
          gitName +
          "/.env/master/.env.view";
      } else if (-1 !== url.hostname.indexOf("localhost")) {
        source = "/.env.view";
      } else {
        console.warn("Need setup gitName with url http://xxx?gitName=yyy");
      }
    }
    if (source) {
      sourceSession(source);
      ajaxDispatch("ajaxGet", {
        // disableCacheBusting: true,
        url: source,
        ini: true,
      });
    }
    let phrase = "";
    const head = query.one("head");
    const handleKeydown = (e) => {
      const eKey = getEventKey(e);
      switch (eKey) {
        case "13":
        case "Enter":
          if (phrase === "goto") {
            location.href = "https://github.com/HillLiu/hillliu.github.io";
          }
          break;
        case "27":
        case "Escape":
          phrase = "";
          break;
        case "8":
        case "Backspace":
          phrase = phrase.substring(0, phrase.length - 1);
          break;
        default:
          const inputMap = {
            ArrowUp: "↑",
            ArrowRight: "→",
            ArrowDown: "↓",
            ArrowLeft: "←",
          };
          const input = 1 === eKey.length ? eKey : inputMap[eKey];
          if (input) {
            phrase += input;
          }
          break;
      }
      head.setAttribute("data-type", phrase);
      head.setAttribute("data-last-type", eKey);
    };

    win().addEventListener("keydown", handleKeydown);
    return () => {
      win().removeEventListener("keydown", handleKeydown);
    };
  }, []);
  return (
    <ClientRoute
      {...props}
      themes={themes}
      defaultThemePath="Home"
      themePath={themePath}
      onHashChange={disableHandleAnchor}
    />
  );
};

export default Index;
