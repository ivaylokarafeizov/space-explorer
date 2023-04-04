import styles from './Post.module.css';
import { Link, useNavigate } from 'react-router-dom';
import ProfilePicture from '../ProfilePicture/ProfilePicture.js';
import { BiCommentAdd, BiLike } from 'react-icons/bi';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { usePostsContext } from '../../../contexts/PostsContext';
import { postsServiceFactory } from '../../../services/postsService';
import { useService } from '../../../hooks/useService';

export default function Post(post) {
    const navigate = useNavigate();
    const { deletePost } = usePostsContext();
    const postsService = useService(postsServiceFactory);
    const isOwner =
        JSON.parse(localStorage.getItem('auth'))._id === post._ownerId;
    const name = post.name;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(
            `Are you sure you want to delete "${post.title}"`
        );

        if (result) {
            await postsService.delete(post._id);

            deletePost(post._id);

            navigate('/');
        }
    };
    console.log(post._id);
    return (
        <section className={styles['card-component']} key={post._id}>
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
                            <AiOutlineDelete className={styles['delete']} />
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
            <div className={styles['card-actions']}>
                <div>{post.likes} Likes</div>
                <div className={styles['btn-div']}>
                    <Link to='/' className={styles['links']}>
                        See Comments
                    </Link>
                </div>
            </div>
            <hr />
            <div className={styles['card-actions']}>
                <div className={styles['btn-div']}>
                    <BiLike /> Like
                </div>
                <div className={styles['btn-div']}>
                    <Link to='/' className={styles['links']}>
                        <BiCommentAdd /> Comment
                    </Link>
                </div>
            </div>
        </section>
    );
}
