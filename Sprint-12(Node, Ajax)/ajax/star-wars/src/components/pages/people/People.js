import { useState, useEffect } from 'react';
import SwService from '../../../services/Sw-Service';
import Header from '../../header/Header';
import ButtonNext from '../../button/Button';


const People = () => {
  const [people, setPeople] = useState({});
  const { getAllpeople } = SwService();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllpeople.then((res) => {
      res.map(item => {
        setPeople(item)
      })
    })
  },[])

  return (
    <>
    {console.log(people)}
      <Header/>
      <ButtonNext/>
    </>
  )
}
export default People;