import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePostsContext } from '../../contexts/PostsContext';
import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { postsServiceFactory } from '../../services/postsService';
import eyeSpace from '../../assets/eye_space.jpg';
import styles from './EditPost.module.css';

export const EditPost = () => {
    const { onPostEditSubmit } = usePostsContext();
    const { postId } = useParams();
    const postsService = useService(postsServiceFactory);

    const { values, changeHandler, onSubmit, changeValues } = useForm(
        {
            name: '',
            location: '',
            title: '',
            imageUrl: '',
        },
        onPostEditSubmit
    );

    useEffect(() => {
        postsService.getPost(postId).then((result) => {
            changeValues(result);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId]);

    return (
        <section
            id='edit-page'
            className={styles['edit-section']}
            style={{ backgroundImage: `url(${eyeSpace})` }}
        >
            <form
                id='edit'
                className={styles['edit-form']}
                method='post'
                onSubmit={onSubmit}
            >
                <h3>Edit Post</h3>
                <label htmlFor='name' className={styles['label']}>
                    Name:
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={values.name}
                    onChange={changeHandler}
                />

                <label htmlFor='location' className={styles['label']}>
                    Location:
                </label>
                <input
                    type='text'
                    id='location'
                    name='location'
                    value={values.location}
                    onChange={changeHandler}
                />

                <label htmlFor='title' className={styles['label']}>
                    Title:
                </label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={values.title}
                    onChange={changeHandler}
                />

                <label htmlFor='imageUrl' className={styles['label']}>
                    Image:
                </label>
                <input
                    type='text'
                    id='imageUrl'
                    name='imageUrl'
                    value={values.imageUrl}
                    onChange={changeHandler}
                />
                <button type='submit' value='Edit Post'>
                    Edit Post
                </button>
            </form>
        </section>
    );
};
