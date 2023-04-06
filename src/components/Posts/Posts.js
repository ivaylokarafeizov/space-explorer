import styles from './Posts.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postsServiceFactory } from '../../services/postsService';
import { IoIosCreate } from 'react-icons/io';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsService = postsServiceFactory();

        postsService.getAll().then(setPosts);
    }, []);

    return (
        <main className={styles['main']}>
            <section className={styles['cards']}>
                <Link to='/create' className={styles['link-btn']}>
                    <IoIosCreate /> Create Post
                </Link>
                {posts.map((post) => {
                    const name = post.name;

                    return (
                        <section
                            className={styles['card-component']}
                            key={post._id}
                        >
                            <div className={styles['card-header']}>
                                <div className={styles['user-photo']}>
                                    <ProfilePicture name={name} />
                                </div>
                                <div className={styles['user-info']}>
                                    <h3>{name}</h3>
                                    <p>{post.location}</p>
                                </div>
                            </div>
                            <div className={styles['card-desc']}>
                                <p>{post.title}</p>
                            </div>
                            <div className={styles['card-image']}>
                                <img src={post.imageUrl} alt={post.title} />
                            </div>
                            <div className={styles['user-actions']}>
                                <div className={styles['btn-div']}>
                                    <Link
                                        to={`/details/${post._id}`}
                                        className={styles['links']}
                                    >
                                        Post Details
                                    </Link>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </section>
        </main>
    );
}
