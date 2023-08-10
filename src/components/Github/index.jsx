/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import List from '../List';
import AppContext from '../../State/App.context';
import './Github.css';

const Github = () => {
  const [snack, setSnack] = useContext(AppContext).snackState;
  const [contador, setContador] = useState(0);
  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState('');
  const [followers, setFollowers] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (snack.type && snack.message) {
      alert(`Tipo: ${snack.type} Message: ${snack.message}`)
    }
  }, [snack]);

  const loadUser = async () => {
    const res = await axios.get(`https://api.github.com/users/${value}`);

    if (res.status === 200) {
      setSnack({ type: 'success', message: 'Usuário requisitado com sucesso.'})
    }

    setUser(res.data);
    const repos = await axios.get(res.data.repos_url);
    setRepo(repos.data);
    const followrs = await axios.get(res.data.followers_url);
    setFollowers(followrs.data);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loadUser();
  };

  return (
    <section className="content">
      <form className="form-content" onSubmit={(e) => handleSubmit(e)}>
        <img className="header-icon" src="https://i.ya-webdesign.com/images/github-logo-png.png" alt="github icon" />
        <input placeholder="Pesquisar..." value={value} onChange={(e) => handleChange(e)} />
        <button type="submit">PESQUISAR...</button>
      </form>
      {user && repo && followers && (
      <div className="user-info">
        <div className="about-me">
          <img className="user-icon" src={user.avatar_url} alt="minha foto" />
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <div className="likes-content">
            <button onClick={() => setContador(contador + 1)} type="button">
              Like
            </button>
            { (contador < 10 || contador > 15) && (
            <button onClick={() => setContador(contador - 1)} type="button">
              Dislike
            </button>
            ) }
            <p>{`Você possui ${contador} likes`}</p>
          </div>
        </div>
        <List title="Meus repositórios" elements={repo} />
        <List title="Seguidores" elements={followers} />
      </div>
      )}
    </section>
  );
};

export default Github;
