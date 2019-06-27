# gatsby from scratch
Install gatsby from scratch 

## Storybook



Install `storybook` using npx:

```
npx -p @storybook/cli sb init
```

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