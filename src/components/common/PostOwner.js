import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { usePostsContext } from '../../contexts/PostsContext';

export const PostOwner = ({ children }) => {
    const { postId } = useParams();
    const { getPost } = usePostsContext();
    const { userId } = useAuthContext();

    const currentPost = getPost(postId);

    if (currentPost && currentPost._ownerId !== userId) {
        return <Navigate to='/' />;
    }

    return children ? children : <Outlet />;
};
