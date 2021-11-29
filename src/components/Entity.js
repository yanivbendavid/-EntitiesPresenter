import styles from "./Entity.module.css";

export default function Entity(props) {
    
  return (
    <>
      <div
        style={{ left: props.entity.x, top: props.entity.y }}
        className={styles.entity}
      >
        {props.entity.name}
      </div>
    </>
  );
}
