import React, { ReactNode, createContext } from "react";

const FeatureFlippingContext = createContext<string[]>([]);

function useContext() {
  return React.useContext(FeatureFlippingContext);
}

type ProviderProps = {
  children: ReactNode;
  features: string[];
};

type ToggleProps = {
  children: ReactNode;
  feature: string;
};

const Provider = ({ children, features }: ProviderProps) => {
  return (
    <FeatureFlippingContext.Provider value={features}>
      {children}
    </FeatureFlippingContext.Provider>
  );
};

const Toggle = ({ children, feature }: ToggleProps) => {
  const features: string[] = useContext();

  return features.includes(feature) ? children : null;
};

export default {
  Provider,
  Toggle,
};
