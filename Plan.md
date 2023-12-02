This repo uses the https://github.com/gluestack/expo-head-starter-kit as a starting point.

# NPM vs Yarn

We are using NPM in this repo. To install, we need to use `npm install --legacy-peer-deps`

# Configuring typescript

We extend expo/tsconfig.base by adding:

./tsconfig.json:

```json
{
  "extends": "expo/tsconfig.base"
}
```

This is a reference to the tsconfig.base in ./node_modules/expo/tsconfig.base.json, not to a file committed in this repo.

# Configuring Pretier

## Line Length
