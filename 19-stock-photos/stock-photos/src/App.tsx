import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './components/Photo';
import PhotoService from './services/PhotoService';

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [newImages, setNewImages] = useState(false);
  const fetchImages = async () => {
    setLoading(true);
    try {
      const data = await PhotoService(query, page);
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        }
        if (query) {
          return [...oldPhotos, ...data.results];
        }
        return [...oldPhotos, ...data];
      });
      setNewImages(false);
      setLoading(false);
    } catch (error) {
      setNewImages(false);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      isMounted = false;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
    return () => {
      isMounted = false;
    };
  }, [loading, newImages]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  };
  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='form-input'
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo: any, index) => {
            return (
              <Photo
                key={index}
                alt_description={photo.alt_description}
                likes={photo.likes}
                urls={photo.urls}
                user={{
                  name: photo.user.name,
                  portfolio_url: photo.user.portfolio_url,
                  profile_image: photo.user.profile_image.medium,
                }}
              />
            );
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
