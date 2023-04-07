import { usePostsContext } from '../../contexts/PostsContext';
import { useForm } from '../../hooks/useForm';
import styles from './CreatePost.module.css';
import eyeSpace from '../../assets/eye_space.jpg';
import { v4 as uuid } from 'uuid';

export const CreatePost = () => {
    const _id = uuid();
    const { onCreatePostSubmit } = usePostsContext();
    const { values, changeHandler, onSubmit } = useForm(
        {
            name: '',
            location: '',
            title: '',
            imageUrl: '',
            _ownerId: JSON.parse(localStorage.getItem('auth'))._id,
            _id,
        },
        onCreatePostSubmit
    );

    return (
        <section
            id='create-page'
            className={styles['create-section']}
            style={{ backgroundImage: `url(${eyeSpace})` }}
        >
            <form
                id='create'
                className={styles['create-form']}
                method='post'
                onSubmit={onSubmit}
            >
                <h3>Create Post</h3>

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

                <button type='submit' value='Create Post'>
                    Create Post
                </button>
            </form>
        </section>
    );
};
