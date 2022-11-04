import photo from './assets/img/photo.png';
import './App.scss';

function App() {
  return (
    <div className="container">
        <aside className="navbar">
            <div>
                <h1>
                    Шаталин Евгений
                    <span>Front-end web developer (JavaScript, React)</span>
                </h1>
            </div>
            <nav>

                <li><a href='#'>О бомне</a></li>
                <li><a href='#'>Опыт</a></li>
                <li><a href='#'>Проекты</a></li>
                <li><a href='#'>Навыки и умения</a></li>
                <li><a href='#'>Образование</a></li>
                <li><a href='#'>Контакты</a></li>
            </nav>
        </aside>
        <div className="wrapper">

            <header className="App-header">
                <img src={photo} className="App-logo" alt="logo" />
                <p>Любую задачу реально выполнить, если разбить ее на выполнимые части.</p>
            </header>

            <section>

            </section>
        </div>


    </div>
  );
}

export default App;
