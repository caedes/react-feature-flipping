# React Feature Flipping

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![NPM Version](https://badgen.net/npm/v/@caedes/react-feature-flipping)](https://www.npmjs.com/package/@caedes/react-feature-flipping)
[![BundlePhobia](https://badgen.net/bundlephobia/minzip/@caedes/react-feature-flipping)](https://bundlephobia.com/package/@caedes/react-feature-flipping)

## Foreword

The `@caedes/react-feature-flipping` library is a turnkey tool for React developers who want to improve their products while simplifying and securing their application code deployments.

## Installation

```shell
yarn add @caedes/react-feature-flipping
```

## Usage

```javascript
const features = ["search-engine", "product-zoom", "user-opinion"];

const App = () => {
  return (
    <FeatureFlipping.Provider features={features}>
      <HomeScreen />
    </FeatureFlipping.Provider>
  );
};

const HomeScreen = () => {
  return (
    <main>
      <h1>Home</h1>
      <FeatureFlipping.On feature="search-engine">
        <input type="search" id="product-search" name="q" />
        <button>Search</button>
      </FeatureFlipping.On>
    </main>
  );
};
```

## Explanations

This library provides an easy-to-use solution for managing features, experiments, and parameters of your applications without having to modify the source code. Developers can easily enable or disable features in real-time, control how their application behaves, and perform A/B tests to determine user preferences and improve the user experience.

In summary, the Feature Flipping is a powerful tool for Agile organizations that seek to improve their products while securing their code deployments. With this library, developers can easily manage their application features and improve the user experience without the need to modify the source code.

## Contribution

Install the repository:

```shell
git clone https://github.com/caedes/react-feature-flipping.git
```

Then the dependencies:

```shell
yarn
```

Run the test suite before commiting:

```shell
yarn test
```

And offer your PR! 🚀
