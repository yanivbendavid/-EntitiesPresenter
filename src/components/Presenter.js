import { useEffect, useState, useCallback } from "react";
import Entity from "./Entity";
import { getEntities } from "../api/api";
import LoadingSpinner from "./UI/LoadingSpinner";
import styles from "./Presenter.module.css";
import worldMap from "../assets/world.png";

export default function Presenter(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState("");

  const mapEntities = async () => {
    console.log(1);
    setLoading(<LoadingSpinner />);
    const entities = await getEntities();
    const arr = [];
    for (const key in entities) {
      const entity = { key, ...entities[key] };
      arr.push(entity);
    }
    setList(arr);
    setLoading("");
  };

  const getData = useCallback(() => {
    mapEntities();
  }, []);

  const mapped =
    list.length > 0 &&
    list.map((l) => <Entity entity={l} key={l.key} onReload={mapEntities} />);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className={styles.worldMap}>
      {loading}
      {mapped}
      <img alt="World Map" src={worldMap} />
    </div>
  );
}
