import { property } from "@/data/property";

import {
  Wifi,
  Snowflake,
  Car,
  Trees,
  CookingPot,
  Building2,
  WashingMachine,
  Cable,
} from "lucide-react";

const icons = [
  <Wifi size={34} />,
  <Snowflake size={34} />,
  <Building2 size={34} />,
  <Car size={34} />,
  <Trees size={34} />,
  <CookingPot size={34} />,
  <Cable size={34} />,
  <WashingMachine size={34} />,
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="featuresHeader">
          <span className="featuresTag">Características</span>

          <h2 className="featuresTitle">
            Todo lo que necesitas para sentirte como en casa
          </h2>

          <p className="featuresDescription">
            Un apartamento pensado para ofrecer comodidad, funcionalidad y una
            experiencia única desde el primer día.
          </p>
        </div>

        <div className="featuresGrid">
          {property.features.map((feature, index) => (
            <div key={feature} className="featureCard">
              <div className="featureIcon">{icons[index]}</div>

              <h3 className="featureTitle">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
