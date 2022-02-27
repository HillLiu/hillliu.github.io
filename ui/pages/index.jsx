import React, { Component } from "react";
import { Home } from "pmvc_react_portfolio";
import { ClientRoute } from "reshow-url";
import { ajaxDispatch } from "organism-react-ajax";
import { dispatch } from "reshow";
import { getUrl } from "seturl";

const themes = {
  home: Home,
};

class Index extends Component {
  componentDidMount() {
    let source = getUrl("source");
    if (!source) {
      const url = document.location;
      const gitName = getUrl("gitName") ?? url.hostname.split(".")[0];
      source =
        "https://raw.githubusercontent.com/" +
        gitName +
        "/.env/master/.env.view";
    }
    ajaxDispatch("ajaxGet", {
      url: source,
      disableCacheBusting: true,
      ini: true,
    });
  }

  render() {
    let { themePath, ...props } = this.props;
    return (
      <ClientRoute
        {...props}
        themes={themes}
        defaultThemePath="home"
        themePath={themePath}
        onUrlChange={(url) => (handleAnchor) => (goAnchorDelay) => {
          const params = url.split("/");
          const last = params.length - 1;
          if (params[last]) {
            return {
              portfolioId: params[last],
            };
          }
          return { portfolioId: "" };
        }}
      />
    );
  }
}

export default Index;
