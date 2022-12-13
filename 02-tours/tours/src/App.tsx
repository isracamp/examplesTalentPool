import { useEffect, useState } from 'react';
import { getTourService } from './services/getTourService';
import { Tour } from './models/Tour';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [readMore, setReadMore] = useState<boolean>(false);
  const [tours, setTours] = useState<Tour[]>([
    { id: '', image: '', info: '', name: '', price: '' },
  ]);
  const fetchTours = async () => {
    try {
      const responseTours = await getTourService();
      setTours(responseTours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchTours();
  }, []);
  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return (
    <>
      {isLoading && <h1>loading...</h1>}
      {tours.length === 0 && (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={fetchTours}>
              refresh
            </button>
          </div>
        </main>
      )}

      <main>
        <section>
          {tours.length > 0 && (
            <div className='title'>
              <h3>our tours</h3>
              <div className='underline'></div>
            </div>
          )}
          <div>
            {tours.map((tour: Tour) => (
              <article key={tour.id} className='single-tour'>
                <img src={tour.image} alt={tour.name} />
                <footer>
                  <div className='tour-info'>
                    <h4>{tour.name}</h4>
                    <h4 className='tour-price'>${tour.price}</h4>
                  </div>
                  <p>
                    {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                      {readMore ? 'show less' : '  read more'}
                    </button>
                  </p>
                  <button
                    className='delete-btn'
                    onClick={() => removeTour(tour.id)}
                  >
                    not interested
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
