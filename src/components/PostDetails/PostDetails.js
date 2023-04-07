import styles from './PostDetails.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { AddComment } from '../AddComment/AddComment';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { IoArrowBack } from 'react-icons/io5';
import { postsServiceFactory } from '../../services/postsService';
import { useService } from '../../hooks/useService';
import * as commentService from '../../services/commentService';

export default function PostDetails() {
    const [post, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();
    const postsService = useService(postsServiceFactory);
    const isOwner =
        JSON.parse(localStorage.getItem('auth'))._id === post._ownerId;
    const name = post.name;
    const { postId } = useParams();

    const onCommentSubmit = async (values) => {
        try {
            const { name, comment } = values;

            if (!name || !comment) {
                throw new Error('All fields are required');
            }

            const newComment = await commentService.create(postId, values);

            setComments((state) => [...state, newComment]);
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    useEffect(() => {
        Promise.all([
            postsService.getPost(postId),
            commentService.getAll(postId),
        ]).then(([posts, comments]) => {
            setPosts(posts);
            setComments(comments);
        }); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId]);

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(
            `Are you sure you want to delete "${post.title}"`
        );

        if (result) {
            await postsService.delete(post._id);

            navigate('/posts');
        }
    };

    const onDeleteCommentClick = async (commentId) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete this comment?`);

        if (result) {
            await commentService.deleteComment(postId, commentId);

            setComments((state) =>
                state.filter((comment) => comment._id !== commentId)
            );

            navigate('/details/' + post._id);
        }
    };

    return (
        <main className={styles['main']}>
            <section className={styles['card']} key={post._id}>
                <Link to='/posts'>
                    <IoArrowBack className={styles['back']} />
                </Link>
                <section className={styles['card-component']}>
                    <div className={styles['card-header']}>
                        <div className={styles['user-photo']}>
                            <ProfilePicture name={name} />
                        </div>
                        <div className={styles['user-info']}>
                            <h3>{name}</h3>
                            <p>{post.location}</p>
                        </div>
                        {isOwner ? (
                            <div className={styles['user-actions']}>
                                <div className={styles['btn-div']}>
                                    <Link
                                        to={`/edit/${post._id}`}
                                        className={styles['links']}
                                    >
                                        <AiOutlineEdit />
                                    </Link>
                                </div>
                                <div
                                    className={styles['btn-div']}
                                    onClick={onDeleteClick}
                                >
                                    <AiOutlineDelete
                                        className={styles['delete']}
                                    />
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className={styles['card-desc']}>
                        <p>{post.title}</p>
                    </div>
                    <div className={styles['card-image']}>
                        <img src={post.imageUrl} alt={post.title} />
                    </div>
                    <AddComment onCommentSubmit={onCommentSubmit} />
                    <hr />
                    <section className={styles['comments-section']}>
                        <div className={styles['comments']}>
                            {comments.length !== 0 ? (
                                comments.map((comment) => {
                                    const name = comment.name;

                                    return (
                                        <div
                                            className={styles['comment']}
                                            key={comment._id}
                                        >
                                            <ProfilePicture name={name} />
                                            <div className={styles['message']}>
                                                <div className={styles['name']}>
                                                    {name}
                                                </div>
                                                <div className={styles['text']}>
                                                    {comment.comment}
                                                </div>
                                            </div>
                                            {JSON.parse(
                                                localStorage.getItem('auth')
                                            )._id === comment._ownerId ? (
                                                <div
                                                    className={
                                                        styles[
                                                            'comment-actions'
                                                        ]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles['btn-div']
                                                        }
                                                    >
                                                        <Link
                                                            to={`/edit/${post._id}/${comment._id}`}
                                                            className={
                                                                styles['links']
                                                            }
                                                        >
                                                            <AiOutlineEdit />
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles['btn-div']
                                                        }
                                                        onClick={() =>
                                                            onDeleteCommentClick(
                                                                comment._id
                                                            )
                                                        }
                                                    >
                                                        <AiOutlineDelete
                                                            className={
                                                                styles['delete']
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <h3 className={styles['comments-h3']}>
                                    No comments yet...
                                </h3>
                            )}
                        </div>
                    </section>
                </section>
            </section>
        </main>
    );
}
