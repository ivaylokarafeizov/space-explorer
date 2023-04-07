import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { postsServiceFactory } from '../services/postsService';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const postsService = postsServiceFactory();

    useEffect(() => {
        const postsService = postsServiceFactory();

        postsService.getAll().then((result) => {
            setPosts(result);
        });
    }, []);

    const onCreatePostSubmit = async (post) => {
        try {
            const { name, location, title, imageUrl } = post;

            if (!name || !location || !title || !imageUrl) {
                throw new Error('All fields are required');
            }

            const newPost = await postsService.create(post);

            setPosts((state) => [...state, newPost]);

            navigate(`/posts`);
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const onPostEditSubmit = async (values) => {
        try {
            const { name, location, title, imageUrl } = values;

            if (!name || !location || !title || !imageUrl) {
                throw new Error('All fields are required');
            }

            const result = await postsService.edit(values._id, values);

            setPosts((state) =>
                state.map((x) => (x._id === values._id ? result : x))
            );

            navigate(`/details/${values._id}`);
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const getPost = (postId) => {
        return posts.find((post) => post._id === postId);
    };

    const contextValues = {
        posts,
        onCreatePostSubmit,
        onPostEditSubmit,
        getPost,
    };

    return (
        <PostsContext.Provider value={contextValues}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePostsContext = () => {
    const context = useContext(PostsContext);

    return context;
};
