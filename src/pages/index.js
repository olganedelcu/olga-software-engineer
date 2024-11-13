import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Experience from "../components/experience"

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.heroHeader}>
        <h1 className={styles.mainTitle}>
          Building <span className={styles.highlight}>Digital Experiences</span>
          <br />
          With Code & Creativity
        </h1>
        <p className={styles.subtitle}>
          Software Engineer • Technical Writer • Community Builder
        </p>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.profileCard}>
          <div className={styles.avatarWrapper}>
            <StaticImage
              src="../images/example.png"
              loading="eager"
              width={180}
              height={180}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Olga Constantina"
              className={styles.avatar}
            />
          </div>
          <div className={styles.profileContent}>
            <p className={styles.bio}>
              I'm a community-minded engineer who combines the best of both
              communication and technical skills, bringing experience both from
              the engineering side and the business world.
            </p>
            <div className={styles.techStackTitle}>
              Technologies I work with:
            </div>
            <div className={styles.techStack}>
              <span className={styles.techBadge}>JavaScript</span>
              <span className={styles.techBadge}>React.js</span>
              <span className={styles.techBadge}>TypeScript</span>
              <span className={styles.techBadge}>Node.js</span>
              <span className={styles.techBadge}>Redux</span>
              <span className={styles.techBadge}>REST APIs</span>
            </div>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
