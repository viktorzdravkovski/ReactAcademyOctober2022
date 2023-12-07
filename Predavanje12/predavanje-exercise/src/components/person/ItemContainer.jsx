import styles from "./ItemContainer.module.css";
import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import WorldCard from "./WorldCard";

const ItemContainer = (props) => {
  const [showHomeworld, setShowHomeworld] = useState(false);
  const [homeworld, setHomeworld] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Fetching world...");
    setIsLoading(true);
    fetch(props.person.homeworld)
      .then((response) => response.json())
      .then((data) => {
        const world = {
          name: data.name,
          climate: data.climate,
          terrain: data.terrain,
          population: data.population,
        };

        setHomeworld(world);
        setIsLoading(false);
      });
  }, [props.person.homeworld]);

  return (
    <div className={styles["item-container"]}>
      {!showHomeworld && (
        <PersonCard
          person={props.person}
          showButton={!isLoading}
          loadWorld={() => setShowHomeworld(true)}
        />
      )}
      {showHomeworld && (
        <WorldCard
          world={homeworld}
          loadPerson={() => setShowHomeworld(false)}
        />
      )}
    </div>
  );
};

export default ItemContainer;
