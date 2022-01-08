import axios from 'axios';

const SwService = () => {

  const _apiBase = 'https://swapi.dev/api/people/';
  const _apiImg = 'https://starwars-visualguide.com/#/characters?page=1';

  const getImages = axios.get(_apiImg)
    .then((response) => {
      console.log(response.data)
    })

  const getAllpeople = axios.get(_apiBase)
    .then((response) => {
      return response.data.results.map(transformPeople)
    })
    .catch((err) => {
      console.log(err);
    })

  const transformPeople = (people) => {
    return [
      { id: people.mass },
      { name: people.name },
      { gender: people.gender },
      { birthYear: people.birth_year },
      { eyeColor: people.eye_color }
    ]
  }

  return { getAllpeople, getImages }
}

export default SwService;