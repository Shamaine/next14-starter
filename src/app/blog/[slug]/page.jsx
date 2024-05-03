import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Post Title</h1>
        <div className={styles.detail}>
          <p>This is a test post.</p>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>Posted at 3May2024</span>
          </div>
        </div>
        <div className={styles.content}>This is a post description.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
