import styles from "./admin.module.css";

const AdminPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}></div>
        <div className={styles.col}>User</div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
      </div>
    </div>
  );
};

export default AdminPage;
