import { useEffect, useState } from 'react';
import { getUsers } from './services/getUsers';
import Users from './components/Users';

function App() {
  const resetScroll = () => window.scrollTo(0, 0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const getGithubUsers = async (page?: number) => {
    const response = await getUsers(page);
    setData(response);
  };

  useEffect(() => {
    getGithubUsers(currentPage);
  }, [currentPage]);
  const nextPage = () => {
    setCurrentPage((page) => page + 1);
    resetScroll();
  };
  const prevPage = () => {
    setCurrentPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      resetScroll();
      return prevPage;
    });
  };
  const handlePage = (index: number): void => {
    setCurrentPage(index);
    resetScroll();
  };
  return (
    <main>
      <div className='section-title'>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {data.map((user: any) => {
            return <Users key={user.id} {...user} />;
          })}
        </div>

        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>
            prev
          </button>

          {data.map((_, index) => (
            <button
              key={index}
              className={`page-btn ${
                index === currentPage ? 'active-btn' : null
              }`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          ))}
          <button className='next-btn' onClick={nextPage}>
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
