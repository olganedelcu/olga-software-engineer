import React from "react"
import * as styles from "./experience.module.css"

const positions = [
  {
    company: "Jobsties",
    role: "CTO & Co-Founder",
    period: "May 2025 - Present",
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
    company: "TechVoices Podcast",
    role: "Host / Software Engineer",
    period: "Apr 2024 - January 2025",
    location: "Berlin, Germany · On-site",
    description: [
      {
        text: "- Lead Technical Podcast inviting CTOs, Tech Leads and Senior Software Engineers from several start-ups and organisations",
        highlight: "Tech Leadership",
      },
      {
        text: "- Develop responsive web apps using TypeScript/JavaScript frameworks (React, Next.js, etc.)",
        highlight: "Frontend Dev",
      },
      {
        text: "- Architect and implement Supabase backend solutions with PostgreSQL optimization",
        highlight: "Backend Architecture",
      },
      {
        text: "- Create persistent user experiences with local storage/session management",
        highlight: "User Experience",
      },
      {
        text: "- Build auto-save functionality and state restoration systems",
        highlight: "System Design",
      },
      {
        text: "- Optimise data storage strategies for performance and cost efficiency",
        highlight: "Performance",
      },
    ],
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "System Design",
      "Software Infrastructure",
    ],
  },
  {
    company: "Industrial Analytics GmbH",
    role: "Software Engineer",
    period: "April 2023 - April 2024",
    location: "Berlin, Germany",
    description: [
      {
        text: "- Set up a documentation server and page for streamlined knowledge sharing",
        highlight: "Documentation",
      },
      {
        text: "- Developed AWS pipelines and implemented bash scripting for automated deployments",
        highlight: "40% Faster Deployments",
      },
      {
        text: "- Optimized user experience and mobile responsiveness using Figma, Lighthouse, and SVG formats",
        highlight: "25% Better UX",
      },
      {
        text: "- Implemented Google OAuth for secure user authentication and seamless login experience",
        highlight: "Security & Auth",
      },
      {
        text: "- Utilized Postman for API testing and debugging, ensuring reliable frontend-backend integration",
        highlight: "API Integration",
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
