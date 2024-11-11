import React, { useEffect, useState } from 'react';
import fetchHashnodeBlogFeed from '../utils/fetchHashnodeBlogFeed.js';
import * as styles from './feed.module.css'; // Update to use new feed styles

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [endCursor, setEndCursor] = useState(null);
    const [error, setError] = useState(null);

    const loadMorePosts = async () => {
        try {
            const feed = await fetchHashnodeBlogFeed(4, endCursor);
            const newPosts = feed.edges.map(edge => ({
                title: edge.node.title,
                brief: edge.node.brief,
                coverImage: edge.node.coverImage?.url || "https://via.placeholder.com/150",
                url: `https://olgaconstantina.hashnode.dev/${edge.node.slug}`,
            }));
            setPosts(prevPosts => [...prevPosts, ...newPosts]);
            setHasNextPage(feed.pageInfo.hasNextPage);
            setEndCursor(feed.pageInfo.endCursor);
        } catch (err) {
            setError('Failed to fetch posts');
            console.error(err);
        }
    };

    useEffect(() => {
        loadMorePosts();
    }, []);

    return (
        <section className={styles.feedContainer}>
            <h2 className={styles.feedTitle}>Latest Blog Posts</h2>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.postGrid}>
                {posts.map((post, index) => (
                    <article key={index} className={styles.postCard}>
                        <img 
                            src={post.coverImage} 
                            alt={post.title} 
                            className={styles.postImage}
                        />
                        <div className={styles.postContent}>
                            <h3 className={styles.postTitle}>
                                <a 
                                    href={post.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.postLink}
                                >
                                    {post.title}
                                </a>
                            </h3>
                            <p className={styles.postExcerpt}>{post.brief}</p>
                            <a 
                                href={post.url}
                                className={styles.readMore}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                                <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
            {hasNextPage && (
                <div className={styles.loadMoreContainer}>
                    <button
                        onClick={loadMorePosts}
                        className={styles.loadMoreButton}
                    >
                        Load More Posts
                    </button>
                </div>
            )}
        </section>
    );
};

export default Feed;