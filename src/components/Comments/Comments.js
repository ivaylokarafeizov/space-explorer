import styles from './Comments.module.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as commentService from '../../services/commentService';
import { TiArrowBack } from 'react-icons/ti';
import ProfilePicture from '../Posts/ProfilePicture/ProfilePicture';

export default function Comments() {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll(postId).then(setComments);
    }, [postId]);

    return (
        <main className={styles['main']}>
            <section className={styles['comments-section']}>
                <Link to='/posts' className={styles['link-btn']}>
                    <TiArrowBack className={styles['back-btn']} />
                </Link>
                <div className={styles['comments']}>
                    {comments.map((data) => {
                        const name = data.name;

                        return (
                            <div className={styles['comment']} key={data._id}>
                                <ProfilePicture name={name} />
                                <div className={styles['message']}>
                                    <div className={styles['name']}>{name}</div>
                                    <div className={styles['text']}>
                                        {data.comment}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
