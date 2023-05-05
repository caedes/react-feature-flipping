import React, { createContext } from "react";

const FeatureFlippingContext = createContext([]);

function useContext() {
  return React.useContext(FeatureFlippingContext);
}

const Provider = ({ children, features }) => {
  return (
    <FeatureFlippingContext.Provider value={features}>
      {children}
    </FeatureFlippingContext.Provider>
  );
};

const Toggle = ({ children, feature }) => {
  const features = useContext();

  return features.includes(feature) ? children : null;
};

export default {
  Provider,
  Toggle,
};
