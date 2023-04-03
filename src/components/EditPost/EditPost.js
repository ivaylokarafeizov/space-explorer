import { usePostsContext } from '../../contexts/PostsContext';
import { useForm } from '../../hooks/useForm';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './EditPost.module.css';
import eyeSpace from '../../assets/eye_space.jpg';
import { postsServiceFactory } from '../../services/postsService';
import { useService } from '../../hooks/useService';

export const EditPost = () => {
    const { postId } = useParams();
    const postsService = useService(postsServiceFactory);
    const { onPostEditSubmit } = usePostsContext();
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
            console.log(result);
        });
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
                    value={values.name}
                    onChange={changeHandler}
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter your first and last name...'
                />

                <label htmlFor='location' className={styles['label']}>
                    Location:
                </label>
                <input
                    value={values.location}
                    onChange={changeHandler}
                    type='text'
                    id='location'
                    name='location'
                    placeholder='Enter your location...'
                />

                <label htmlFor='title' className={styles['label']}>
                    Title:
                </label>
                <input
                    value={values.title}
                    onChange={changeHandler}
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Enter a title...'
                />

                <label htmlFor='imageUrl' className={styles['label']}>
                    Image:
                </label>
                <input
                    value={values.imageUrl}
                    onChange={changeHandler}
                    type='text'
                    id='imageUrl'
                    name='imageUrl'
                    placeholder='Upload a photo...'
                />

                <button type='submit' value='Edit Post'>
                    Edit Post
                </button>
            </form>
        </section>
    );
};
