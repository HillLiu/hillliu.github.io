import { useEffect } from "react";
import PortfolioThemes from "pmvc_react_portfolio";
import { ClientRoute, disableHandleAnchor, getAnchorPath } from "reshow-url";
import { ajaxDispatch } from "organism-react-ajax";
import { getUrl } from "seturl";
import { sessionStorage } from "get-storage";

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
