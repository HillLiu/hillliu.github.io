import {lazy} from "react";
import {
  useLazyInject,
  min,
  pageWidth,
  Row as AtomRow,
  Column,
  Menu,
  Progress,
  Icon,
  Item,
  SemanticUI,
  Unsafe,
} from "react-atomic-molecule";
import { Section as ReshowSection } from "reshow";
import { AjaxLink } from "organism-react-ajax";
// AjaxLink is what "reshow" re-exports as ReLink, but neither ships usable
// prop types for it.
const ReLink = AjaxLink as any;
import Home from "ricon/Home";
import GoToTop from "ricon/GoToTop";
import smoothScrollTo from "smooth-scroll-to";
import { marked } from "marked";
// Runtime interop wraps the module; TypeScript only sees the ESM shape.
// React.lazy always reads `.default` off the resolved value, so the named
// export has to be re-wrapped in that shape.
const GitHubCalendar = lazy<any>(async () => ({
  default: (await import("react-github-calendar")).GitHubCalendar as any,
})) as any;

// react-atomic-molecule's generated types mark className as required, but it
// is optional at runtime.
const Row = AtomRow as any;

const renderer = new marked.Renderer();
// marked 18 passes a token object, not positional args.
renderer.link = function (token) {
  const link = marked.Renderer.prototype.link.call(this, token);
  return link.replace("<a", "<a target='_blank' ");
};

const Name = ({ firstName = undefined, lastName = undefined }) => {
  return <SemanticUI style={Styles.name}>Open Source</SemanticUI>;
};

const OneLine = ({ title, children = "" }) => {
  return (
    <Row style={Styles.oneLineRow} className="one-line">
      <Column className="pure-u-md-1-5 title" style={Styles.oneLineColTitle}>
        {title}
      </Column>
      <Column className="pure-u-md-4-5 content">
        <Unsafe>{marked(children, { renderer })}</Unsafe>
      </Column>
    </Row>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <Row>
      <Column className="pure-u-md-1-5">
        <Progress style={Styles.bar} className="tiny blue" percent="100" />
      </Column>
      <Column style={Styles.title} className="pure-u-md-4-5">
        {title}
      </Column>
    </Row>
  );
};

const SectionBody = ({ children, auto, name, ...others }) => {
  let thisChildren;
  if (name) {
    thisChildren = (
      <ReshowSection name={name} {...others}>
        {children}
      </ReshowSection>
    );
  } else {
    thisChildren = children;
  }
  if (auto) {
    return (
      <Row>
        <Column className="pure-u-md-1-5"></Column>
        <Column className="pure-u-md-4-5">{thisChildren}</Column>
      </Row>
    );
  } else {
    return thisChildren;
  }
};

const Section = ({ name = undefined, title, children, auto = undefined, ...others }) => {
  return (
    <SemanticUI style={Styles.section}>
      {title && <SectionHeader title={title} />}
      <SectionBody name={name} auto={auto} {...others}>
        {children}
      </SectionBody>
    </SemanticUI>
  );
};

const OpenSourceMenu = ({ onDownload = undefined }) => {
  return (
    <Menu type="buttons" style={Styles.menu} className="text">
      <ReLink href="/" component={Item} atom="a">
        <Icon>
          <Home />
        </Icon>
      </ReLink>
      <Icon
        className="item"
        style={{ cursor: "pointer" }}
        onClick={() => smoothScrollTo(0)}
      >
        <GoToTop />
      </Icon>
    </Menu>
  );
};

const OpenSource = () => {
  injects = useLazyInject(InjectStyles, injects);
  return (
    <SemanticUI style={Styles.container}>
      <OpenSourceMenu />
      <Name />
      <Section title="Personal">
        <OneLine title="Git">
          https://github.com/HillLiu?tab=repositories
        </OneLine>
        <OneLine title="Code Rank">
          https://profile.codersrank.io/user/hillliu 
        </OneLine>
        <OneLine title="Description">Docker (CICD Tools), Flutter, React Native</OneLine>
      </Section>
      <Section title="Backend">
        <OneLine title="Git">https://github.com/pmvc/pmvc</OneLine>
        <OneLine title="Description">
          A php plugin framework with react (SSR)
        </OneLine>
      </Section>
      <Section title="Frontend">
        <OneLine title="Git">https://github.com/react-atomic/reshow</OneLine>
        <OneLine title="Description">
          React fullstack framework with atomic design.
        </OneLine>
      </Section>
      <Section title="Contributions">
        <GitHubCalendar username="HillLiu" />
      </Section>
    </SemanticUI>
  );
};

export default OpenSource;

const Styles: Record<string, any> = {
  bar: {
    margin: "15px 5px 0 0",
  },
  container: {
    margin: "0 auto",
    maxWidth: pageWidth.lg,
    minWidth: 320,
    position: "relative",
  },
  menu: {
    position: "fixed",
    top: 10,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    backgroundColor: "hsl(0, 100%, 100%)",
  },
  name: {
    display: "inline-block",
    fontSize: "4rem",
    letterSpacing: "0.5rem",
    margin: "5rem 0",
  },
  oneLineRow: {
    marginBottom: 20,
  },
  oneLineColTitle: {
    paddingRight: 10,
    boxSizing: "border-box",
  },
  title: {
    fontSize: "2rem",
    color: "#2185d0",
    marginBottom: "1rem",
  },
};
let injects;
const InjectStyles = {
  oneLineTitle: [
    {
      textAlign: "right",
    },
    [min.md, ".one-line .title"],
  ],
  oneLineTitleAfter: [
    {
      content: ":",
    },
    ".one-line .title:after",
  ],
  oneLineContent: [
    {
      margin: 0,
    },
    ".one-line .content p",
  ],
};
