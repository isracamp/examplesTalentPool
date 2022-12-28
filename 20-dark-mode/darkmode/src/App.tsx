import Theme from './theme/Theme';
import data from './db/Data';
import '../src/index.css';
import Article from './components/article/Article';
function App() {
  return (
    <Theme>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </Theme>
  );
}

export default App;
