import PropTypes from 'prop-types';
import axios from 'axios';

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3000/api/users', { username: value, secret: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
      props.onAuth({ username: value, secret: value });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Bem-vindo ao Chat !</div>
  
          <div className="form-subtitle">Digite seu nome de usuário para começar</div>
  
          <div className="auth">
            <div className="auth-label">Nome de usuário</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;