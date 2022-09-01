import useHttp from "../hooks/http.hook"

const  useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=27accb05a97b0c2d968924e51b5069ff";
  const _baseOffset = 414;


  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(
      `${_apiBase}characters/${id}?${_apiKey}`
    );
    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name.length > 10 ? `${char.name.substring(0, 15)}...` : char.name,
      description: char.description ? `${char.description.substring(0, 164)}...` : 'There is no description',
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics : char.comics.items,
    };
  };

  return { loading, error, getAllCharacters, getCharacter, clearError};
}

export default useMarvelService;
