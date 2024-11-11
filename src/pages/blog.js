import React from 'react';
import Layout from '../components/layout';
import Feed from '../components/feed';
import Seo from '../components/seo';
import * as styles from '../components/blog.module.css';

const BlogPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.heroHeader}>
          <h1 className={styles.mainTitle}>
            Building <span className={styles.highlight}>Digital Stories</span>
          </h1>
          <p className={styles.subtitle}>
            Thoughts on Software Engineering, Documentation, and Community
          </p>
        </div>
        <Feed />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Blog" />;

export default BlogPage;