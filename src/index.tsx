import { ReactNode, createContext, useContext } from "react";

export type Feature = string;

type ProviderProps = {
  children: ReactNode;
  features: Feature[];
};

type ToggleProps = {
  children: ReactNode;
  feature: string;
};

const FeatureFlippingContext = createContext<Feature[]>([]);

const Provider = ({ children, features }: ProviderProps) => {
  return (
    <FeatureFlippingContext.Provider value={features}>
      {children}
    </FeatureFlippingContext.Provider>
  );
};

const On = ({ children, feature }: ToggleProps) => {
  const features = useContext(FeatureFlippingContext);

  return features.includes(feature) ? <>{children}</> : null;
};

const Off = ({ children, feature }: ToggleProps) => {
  const features = useContext(FeatureFlippingContext);

  return features.includes(feature) ? null : <>{children}</>;
};

export default {
  Provider,
  On,
  Off,
};
