# gatsby from scratch
Install gatsby from scratch 

## Jest and react-testing-library

```
npm i -D jest babel-jest react-test-renderer babel-preset-gatsby @testing-library/react identity-obj-proxy
```

see: [react-testing-library](https://github.com/testing-library/react-testing-library)


## Storybook

Install `storybook` using npx:

```
npx -p @storybook/cli sb init
```

According to [Gatsby Visual Testing with Storybook](https://www.gatsbyjs.org/docs/visual-testing-with-storybook/#setting-up-your-environment) we have to update the `.storybook/config.js`.

Change `package.json` to run storybook in **production** mode.

Change these lines:
```
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
```

to:
```
{
  "scripts": {
    "storybook": "NODE_ENV=production start-storybook -s static",
    "build-storybook": "NODE_ENV=production build-storybook -s static"
  }
}
```

This is differently to the **jest and storybook starter**.

Cannot run Stroybook v5 with Gatsby StaticQuery.

## Setup

- initialize project
- add .gitignore
- install gatsby react react-dom

```
npm i -S gatsby react react-dom
```

Installing prettier and add `format` command

```
npm i -D prettier
```

Change scripts in `package.json` to include:

```
"format": "prettier --write src/**/*.{js,jsx}",
```