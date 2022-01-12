const getMovieDetailsById = async (id) => {

    const url = new URL("https://www.omdbapi.com");
    url.searchParams.append("apikey", apikey);
    url.searchParams.append("i", id);
    return await fetch(url);
  };
  
  const getMoviesBySearchTerm = async (term) => {
    const url = new URL("https://www.omdbapi.com");
    url.searchParams.append("apikey", apikey);
    url.searchParams.append("s", term);
    return await fetch(url);
  };

  export { getMovieDetailsById, getMoviesBySearchTerm };