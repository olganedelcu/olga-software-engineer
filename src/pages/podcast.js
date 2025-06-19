import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/podcast.module.css';
import image from '../images/podcast.png';
import image1 from '../images/podcast2.png';
import main from '../images/main.png';
import image3 from '../images/podcast3.png';

const PodcastPage = () => {
  const episodes = [
    {
      number: "Episode 3",
      title: "Getting to Senior and passion for code",
      description: "Coming soon...",
      duration: "32 mins",
      date: "Sep 6, 2024",
      thumbnail: image3,
      link: ""
    },
    {
      number: "Episode 2",
      title: "From Project Management to CTO: A Journey in Tech Leadership",
      description: "In this episode, Ingo Einhorst shares his fascinating journey from project management to becoming a CTO. We explore his transition into technical leadership, innovative AI projects, and insights into modern tech management.",
      duration: "32 mins",
      date: "Aug 23, 2024",
      thumbnail: image,
      link: "https://www.youtube.com/watch?v=FYqCsJ7B2Y0&t=664s&ab_channel=TheTechJourneyPodcast"
    },
    {
      number: "Episode 1",
      title: "From Freelancing, to Senior Software Engineer and relocation to Germany",
      description: "Join us as we explore the journey from freelancing to becoming a Senior Software Engineer in Germany. We discuss wearing multiple tech hats, navigating impostor syndrome (which affects 58% of developers), and the challenges of international relocation.",
      duration: "30 mins",
      date: "Jul 6, 2024",
      thumbnail: image1,
      link: "https://www.youtube.com/watch?v=dwxsUdy7lIA&t=1411s&ab_channel=TechVoicesCorner"
    }
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                The <span className={styles.highlight}>Tech Journey</span> Podcast
              </h1>
              <p className={styles.description}>
                Join me as we explore software engineering, career growth, and tech industry insights. 
                New episodes every month featuring in-depth discussions and expert guests.
              </p>
              <div className={styles.platformLinks}>
                <a 
                  href="https://open.spotify.com/show/4v69Nbwj8XhSdhZeVWX6M8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.platformButton} ${styles.spotify}`}
                >
                  <svg className={styles.platformIcon} viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                </a>
                <a 
                  href="https://www.youtube.com/@Tech-voices-podcast-pq9nj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.platformButton} ${styles.youtube}`}
                >
                  <svg className={styles.platformIcon} viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <img 
                src={main} 
                alt="Olga Constantina - Tech Journey Podcast" 
                className={styles.podcastImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.latestEpisodes}>
          <h2 className={styles.sectionTitle}>Latest Episodes</h2>
          <div className={styles.episodeGrid}>
            {episodes.map((episode, index) => (
              <a 
                key={index}
                href={episode.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.episodeLink}
                {...(!episode.link && { onClick: (e) => e.preventDefault() })}
              >
                <div className={`${styles.episodeCard} ${!episode.link ? styles.comingSoon : ''}`}>
                  <div className={styles.episodeThumbnail}>
                    <img 
                      src={episode.thumbnail} 
                      alt={`${episode.title} thumbnail`} 
                    />
                    <div className={styles.playButton}>
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.episodeContent}>
                    <span className={styles.episodeNumber}>{episode.number}</span>
                    <h3 className={styles.episodeTitle}>
                      {episode.title}
                    </h3>
                    <p className={styles.episodeDescription}>
                      {episode.description}
                    </p>
                    <div className={styles.episodeMeta}>
                      <span>{episode.duration}</span>
                      <span>{episode.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Podcast" />;

export default PodcastPage;
