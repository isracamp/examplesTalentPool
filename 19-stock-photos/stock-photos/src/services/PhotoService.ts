const PhotoService = async (query: string, page: number) => {
  let url;
  const urlPage = `&page=${page}`;
  const urlQuery = `&query=${query}`;
  const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
  const mainUrl = `https://api.unsplash.com/photos/`;
  const searchUrl = `https://api.unsplash.com/search/photos/`;
  if (query) {
    url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
  } else {
    url = `${mainUrl}${clientID}${urlPage}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default PhotoService;
