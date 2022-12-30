import styles from "../styles/components/BlogResult.module.css";

const BlogResult = ({ result }) => {
  return (
    <div>
      <div className={styles.blog_header}>
        <span className={styles.blog_header__title}>📚 블로그 📚</span>
      </div>
      <div className={styles.blog_main}>
        {result.map((info, i) => (
          <div key={i} className={styles.blog_contents}>
            <a href={info.url} target="__blank" className={styles.blog_img__link}>
              <div className={styles.blog_contents__info}>
                <p className={styles.blog_contents__info__identity}>
                  👤 {info.blogname} / ( 🕰️ {info.datetime} )
                </p>
                <p dangerouslySetInnerHTML={{ __html: info.title }} className={styles.blog_contetns__info__title}></p>
                <div dangerouslySetInnerHTML={{ __html: info.contents }} className={styles.blog_contetns__info__desc}></div>
              </div>
            </a>
            <img src={info.thumbnail} className={styles.blog_img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogResult;
