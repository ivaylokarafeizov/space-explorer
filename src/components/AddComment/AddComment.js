import { useForm } from '../../hooks/useForm';
import styles from './AddComment.module.css';
import { v4 as uuid } from 'uuid';

export const AddComment = ({ onCommentSubmit }) => {
    const _id = uuid();
    const { values, changeHandler, onSubmit } = useForm(
        {
            name: '',
            comment: '',
            _ownerId: JSON.parse(localStorage.getItem('auth'))._id,
            _id,
        },
        onCommentSubmit
    );

    return (
        <div className={styles['create-comment']}>
            <form
                className={styles['comment-form']}
                method='post'
                onSubmit={onSubmit}
            >
                <h3>Create Comment</h3>
                <input
                    className={styles['comment-input']}
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Bruce Wayne'
                    value={values.name}
                    onChange={changeHandler}
                />
                <textarea
                    className={styles['comment-textarea']}
                    rows='2'
                    cols='70'
                    maxLength='300'
                    name='comment'
                    placeholder='Comment'
                    value={values.comment}
                    onChange={changeHandler}
                ></textarea>
                <button
                    type='submit'
                    value='Add Comment'
                    className={styles['comment-btn']}
                >
                    Comment
                </button>
            </form>
        </div>
    );
};
