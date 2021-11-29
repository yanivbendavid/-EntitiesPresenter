import { deleteEntity } from "../api/api";
import styles from "./Entity.module.css";

export default function Entity(props) {
  const deleteHandler = async () => {
    if (window.confirm("Are you sure you wish to delete this entity?")) {
      const response = await deleteEntity(props.entity.key);
      if(response.ok){
          props.onReload();
      }
    }
  };

  return (
    <>
      <div
        className={styles.entity}
        style={{
          marginLeft: `${props.entity.x}px`,
          marginTop: `${props.entity.y}px`,
        }}
      >
        <p onClick={deleteHandler}>{props.entity.name}</p>
      </div>
    </>
  );
}
