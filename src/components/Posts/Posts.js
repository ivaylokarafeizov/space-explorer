import styles from './Posts.module.css';
import Post from './Post/Post.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postsServiceFactory } from '../../services/postsService';
import { IoIosCreate } from 'react-icons/io';

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
                {posts.map((data) => (
                    <Post key={data._id} {...data} />
                ))}
            </section>
        </main>
    );
}
