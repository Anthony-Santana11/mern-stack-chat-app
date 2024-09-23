import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
    return ( <div style={{ height: '100vh' }}>
        <PrettyChatWindow
        projectId = '78ecb2a4-a18a-40df-8d81-45042ae3f201'
        username = {props.user.username}
        secret = {props.user.secret}
        />
    </div>
    );
}

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired
    }).isRequired
};

export default ChatsPage;