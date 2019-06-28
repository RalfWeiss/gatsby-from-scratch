const React = require("react");
const { action } = require("@storybook/addon-actions");

const linkActionHandler = action("Link:");
const navigateActionHandler = action("NavigateTo:");

module.exports = {
  graphql: (args) => args,
  Link: ({ to, ...rest }) =>
    React.createElement("a", {
      ...rest,
      href: to,
      onClick: (e) => {
        e.preventDefault();
        linkActionHandler(to);
      }
    }),
  StaticQuery: () => {},
  useStaticQuery: (args) => {
    return {
      site: {
        siteMetadata: {
          title: "Title from .storybook"
        }
      }
    }
  },
  navigate: (to, options) => {
    navigateActionHandler(to, options);
  }
}
