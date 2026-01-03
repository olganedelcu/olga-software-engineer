import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/blog.module.css"

const toYouTubeEmbedUrl = (url) => {
  try {
    const u = new URL(url)

    // youtu.be/<id>
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "").trim()
      if (id) return `https://www.youtube.com/embed/${id}`
    }

    // youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v")
      if (id) return `https://www.youtube.com/embed/${id}`

      // already /embed/<id>
      if (u.pathname.startsWith("/embed/")) return url
    }
  } catch (_) {
    // ignore invalid URLs and fall through
  }

  return url
}

const ProjectsPage = () => {
  const projects = [
    {
      title: "Personal Jobseeker Tracker",
      description:
        "Personal tracker for a jobseekers to track everything from interviews to applications to applying to roles",
      image: "/projects_demos/platform_demo.png",
      video:
        "https://www.youtube.com/embed/eUhI0YeWIx8?si=TrlBvbDtMuGJifIZ",
      technologies: ["TypeScript", "React.js"],
      status: "Live",
      link: "https://platform.jobsties.com/",
    },
    {
      title: "Cultural Cards Hillsong Berlin",
      description: "Digital print, you can check the cards at any time :)",
      image: "/projects_demos/cultural_cards.png",
      video:
        "https://www.youtube.com/embed/f-QC2DkJtO4?si=xi3qCCdffbUm8hbD",
      technologies: ["TypeScript", "Interactive"],
      status: "Live",
      link: "https://hillsong-cards.vercel.app/",
    },
    {
      title: "Business Coach Portfolio Website",
      description:
        "Displaying services and booking appointments for a business coach",
      video:
        "https://www.youtube.com/embed/f99ism1y6u8?si=7IY_ItvWnyk_3zZI",
      technologies: ["TypeScript", "React.js"],
      status: "Live",
      link: "https://www.aktbusinesscoach.com/",
    },
    {
      title: "Jobsties Official Website",
      description:
        "Built a website for company Jobsties to showcase their services and get leads",
      video:
        "https://www.youtube.com/embed/1bKL_Di-f3I?si=yFm_U1b3_pBoySR4",
      technologies: ["TypeScript", "React.js"],
      status: "Live",
      link: "https://www.jobsties.com/",
    },
    {
      title: "Expendings Tracker App",
      description:
        "Built a web app to track personal expendings and incomes with charts and statistics",
      video:
        "https://www.youtube.com/embed/LGY2HAgC2-c?si=5OWbDijs3LMHehg-",
      technologies: ["Javascript"],
      status: "Live",
      link: "https://trackexpendings.netlify.app/",
    },
    {
      title: "Star Wars Catalog",
      description:
        "Built a web app to demostrate fetching data from an external API",
      video:
        "https://www.youtube.com/embed/4w2kLYpFqC0?si=ZMAl1hCYns0kgLs2",
      technologies: ["Javascript"],
      status: "Live",
      link: "https://catalog-star-wars.netlify.app/",
    },
  ]

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.heroHeader} style={{ paddingTop: "2rem" }}>
          <h1 className={styles.mainTitle}>
            <span className={styles.highlight}>Projects</span>
          </h1>
          <p className={styles.subtitle}>
            Here you can find cool projects built throughout my career! Check
            them out!
          </p>
        </div>

        <div className={styles.feedContainer}>
          <div className={styles.postsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.postCard}>
                <iframe
                  width="560"
                  height="315"
                  src={project.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ borderRadius: "24px 24px 0 0", marginBottom: "1rem" }}
                />

                <div className={styles.postContent}>
                  <span
                    style={{
                      color: "var(--primary)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  >
                    {project.status}
                  </span>

                  <h3 className={styles.postTitle}>{project.title}</h3>

                  <p className={styles.postExcerpt}>{project.description}</p>

                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                      marginTop: "auto",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{project.technologies.join(", ")}</span>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readMore}
                    >
                      View Live →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage