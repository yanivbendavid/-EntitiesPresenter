import { useEffect, useState, useCallback } from "react";
import Entity from "./Entity";
import { getEntities } from "../api/api";
import styles from "./Presenter.module.css";
import worldMap from "../assets/world.png";

export default function Presenter(props) {
  const [list, setList] = useState([]);

  const mapEntities = async () => {
    const entities = await getEntities();
    const arr = [];
    for (const key in entities) {
      const entity = { key, ...entities[key] };
      arr.push(entity);
    }
    setList(arr);
  };

  const getData = useCallback(() => {
    mapEntities();
  }, []);

   const mapped = list.length===0 ? "Loading....": list.map((l) => <Entity entity={l} key={l.key} />);

  useEffect(() => {
    getData();
  }, [getData]);
  
  return (
    <div className={styles.worldMap}>
      {mapped}
      <img alt="World Map" src={worldMap} />
    </div>
  );
}
