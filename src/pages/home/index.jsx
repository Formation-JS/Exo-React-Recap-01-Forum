import forum from './forum.jpg';
import style from './home.module.css';

const HomePage = () => {
    return (<>
        <h1>Accueil</h1>
        <p>Bienvenue sur le forum</p>
        <div className={style.forumImage}>
            <img src={forum} alt='forum' />
        </div>
    </>);
};

export default HomePage;