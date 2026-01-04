import React from "react"
import * as styles from "./experience.module.css"

const positions = [
  {
    company: "Jobsties",
    role: "CTO & Co-Founder",
    period: "May 2024 - Present",
    location: "Berlin, Germany · Remote",
    link: "https://jobsties.com/",
    description: [
      {
        text: "Building the #1 career platform for professionals to land the next role in Europe",
        highlight: "Engineering",
      },
      {
        text: "Helping professionals navigate today's tough job market with strategy, clarity, and confidence. We guide you to reposition your personal brand, upgrade your mindset, and land better jobs. Without wasting time on trial and error.",
        highlight: "Career Strategy",
      },
    ],
    tech: ["Personal Branding", "Career Strategy", "Professional Development", "Leadership", "Mentoring"],
  },
  {
    company: "Industrial Analytics GmbH",
    role: "Software Engineer",
    period: "April 2023 - April 2024",
    location: "Berlin, Germany",
    description: [
      {
        text: "- Led frontend ownership of a greenfield internal platform, delivering a centralized documentation and tooling system used by 200+ internal users, built from scratch to production.",
        highlight: "Greenfield Platform",
      },
      {
        text: "- Designed and implemented a scalable UI architecture supporting 10+ internal workflows across engineering, HR, and operations, with a strong focus on usability, maintainability, and consistency.",
        highlight: "scalable UI architecture supporting 10+ internal workflows",
      },
      {
        text: "- Containerized 3+ services (frontend, backend, documentation) and established CI/CD pipelines, reducing manual deployment steps by 60% and improving release reliability.",
        highlight: "Containerization & CI/CD",
      },
      {
        text: "- Integrated single sign-on (SSO) using Google OAuth, enabling secure access across 5+ internal tools.",
        highlight: "Security & Auth",
      },
      {
        text: "- Implemented A/B testing and feature experimentation, validating UI changes and increasing feature adoption.",
        highlight: "A/B Testing",
      },
      {
        text: "- Refactored 68 legacy automation scripts (300+ LOC each) into a modern TypeScript codebase, improving maintainability and reducing operational errors by 40%.",
        highlight: "Refactoring Legacy Code",
      },
      {
        text: "- Established a centralized, CI/CD-integrated documentation system, ensuring 100% alignment between documentation and production releases.",
        highlight: "Documentation System",
      },
      {
        text: "- Collaborated with 8+ stakeholders (CTO, Engineering Managers, Product) to deliver 8+ features from requirements through production.",
        highlight: "Collaborated with 8+ stakeholders",
      },
    ],
    tech: [
      "JavaScript",
      "TypeScript",
      "Cypress",
      "Jest",
      "Git",
      "Azure",
      "AWS",
      "Bash",
      "Cloud Infrastructure",
    ],
  },
  {
    company: "Solaris",
    role: "Assistant Tech Management",
    period: "Apr 2022 - Sep 2022",
    location: "Berlin, Germany",
    description: [
      {
        text: "- Created comprehensive reports and presentations for leadership meetings, managing on-call developer compensation tracking",
        highlight: "Leadership Support",
      },
      {
        text: "- Developed reusable frontend components and libraries to improve development efficiency",
        highlight: "Code Reusability",
      },
      {
        text: "- Maintained and tracked internal OKRs, ensuring proper prioritization and focus across tech initiatives",
        highlight: "OKR Management",
      },
      {
        text: "- Facilitated monthly progress reviews with CTO and tech leadership team",
        highlight: "Tech Leadership",
      },
      {
        text: "- Participated in tech initiatives and training sessions focused on backend services and banking APIs",
        highlight: "Banking APIs",
      },
    ],
    tech: ["React.js", "Excel", "Postman", "Banking APIs", "Confluence", "Git"],
  },
  {
    company: "theSeniorDev.com",
    role: "Junior Frontend Developer",
    period: "Jul 2021 - Mar 2022",
    location: "Berlin, Germany",
    description: [
      {
        text: "- Identified and improved billing process by implementing Stripe automated reports and Excel integration",
        highlight: "Process Optimization",
      },
      {
        text: "- Enhanced customer experience through integration of Payfunnels for streamlined payment processing",
        highlight: "Payment Integration",
      },
      {
        text: "- Implemented and analyzed A/B testing to optimize website features and user experience",
        highlight: "A/B Testing",
      },
      {
        text: "- Increased agency website click-through rate through web development and SEO best practices",
        highlight: "18% CTR Increase",
      },
    ],
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Hooks",
      "Redux",
      "Styled Components",
      "Webpack",
      "Babel",
      "Git",
    ],
  },
]

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>
        Professional Experience
      </h2>

      <div className={styles.positionsGrid}>
        {positions.map((position, index) => {
          const CardContent = (
            <div key={index} className={`${styles.positionCard} ${position.company === "Jobsties" ? styles.jobstiesCard : ""}`}>
              <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                  <h3 className={styles.role}>{position.role}</h3>
                  <div className={styles.companyInfo}>
                    <span className={styles.company}>{position.company}</span>
                    <div className={styles.locationWrapper}>
                      <svg
                        className={styles.locationIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className={styles.location}>{position.location}</span>
                    </div>
                  </div>
                </div>
                <span className={styles.period}>{position.period}</span>
              </div>

              <ul className={styles.descriptionList}>
                {position.description.map((item, index) => (
                  <li key={index}>
                    <span className={styles.achievementHighlight}>
                      {item.highlight}
                    </span>
                    <p className={styles.achievementText}>{item.text}</p>
                  </li>
                ))}
              </ul>

              <div className={styles.techStack}>
                {position.tech.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );

          return position.link ? (
            <a
              key={index}
              href={position.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              {CardContent}
            </a>
          ) : (
            CardContent
          );
        })}
      </div>
    </section>
  )
}

export default Experience
