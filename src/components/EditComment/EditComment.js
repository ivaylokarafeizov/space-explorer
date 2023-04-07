import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import * as commentService from '../../services/commentService';
import eyeSpace from '../../assets/eye_space.jpg';
import styles from './EditComment.module.css';

export const EditComment = () => {
    const { postId, commentId } = useParams();
    const navigate = useNavigate();

    const onCommentEditSubmit = async (values) => {
        try {
            const { name, comment } = values;

            if (!name || !comment) {
                throw new Error('All fields are required');
            }

            commentService.edit(postId, commentId, values);

            navigate(`/details/${postId}`);
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const { values, changeHandler, onSubmit, changeValues } = useForm(
        {
            name: '',
            comment: '',
        },
        onCommentEditSubmit
    );

    useEffect(() => {
        commentService.getComment(postId, commentId).then((result) => {
            changeValues(result);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId, commentId]);

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
                <h3>Edit Comment</h3>
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
                <label htmlFor='comment' className={styles['label']}>
                    Comment:
                </label>
                <input
                    type='text'
                    id='comment'
                    name='comment'
                    value={values.comment}
                    onChange={changeHandler}
                />

                <button type='submit' value='Edit  Comment'>
                    Edit Comment
                </button>
            </form>
        </section>
    );
};
