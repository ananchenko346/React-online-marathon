import {useState, useEffect} from 'react';

const withLoading = (BaseComponent, val) => {
  return (props) => {
    const {fetchMethod, params} = props;
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchMethod(params)
        .then(res => {
          setData(res);
          console.log(val, res);
        });
    }, [params]);

    return data ?
      <BaseComponent
        {...props}
        data={data}/> :
      <p className="center">Loading...</p>
  };
};

export default withLoading;