import {lazy} from "react";
import {
  useLazyInject,
  min,
  pageWidth,
  Row,
  Column,
  Menu,
  Progress,
  Icon,
  Item,
  SemanticUI,
  Unsafe,
} from "react-atomic-molecule";
import { ReLink } from "reshow";
import Home from "ricon/Home";
import GoToTop from "ricon/GoToTop";
import smoothScrollTo from "smooth-scroll-to";
import { marked } from "marked";
const GitHubCalendar = lazy(async () => (await import('react-github-calendar')).default); 

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
};

const Name = ({ firstName, lastName }) => {
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

const Section = ({ name, title, children, auto, ...others }) => {
  return (
    <SemanticUI style={Styles.section}>
      {title && <SectionHeader title={title} />}
      <SectionBody name={name} auto={auto} {...others}>
        {children}
      </SectionBody>
    </SemanticUI>
  );
};

const OpenSourceMenu = ({ onDownload }) => {
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
      <Section title="Devops, App">
        <OneLine title="Git">
          https://github.com/HillLiu?tab=repositories
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

const Styles = {
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
