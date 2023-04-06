import { getRandomColor } from '../../utils/getRandomColor';
import { createImageFromInitials } from '../../utils/createImageFromInitials';

export default function ProfilePicture({ name }) {
    return (
        <div>
            <img
                id='preview'
                src={createImageFromInitials(500, name, getRandomColor())}
                alt='profile-pic'
            />
        </div>
    );
}
