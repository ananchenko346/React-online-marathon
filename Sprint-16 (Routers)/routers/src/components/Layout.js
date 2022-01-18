import {Outlet, useNavigate, Link} from "react-router-dom";
import {useState} from "react";

const Layout = () => {
  const path3 = '/subtask3';
  const path4 = '/subtask4';

  const navigate = useNavigate();
  const [data, setData] = useState(null);

  return (
    <div className="Main">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link href='/' to={(data % 2 !== 0) ? path3 : '/'}>
        Show protected information if
      </Link>
      <span>&nbsp;</span>
      <input size="5" onChange={e => setData(+e.target.value)}></input> is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input onChange={() => navigate(path4, { replace: true })} type="checkbox"></input>
      </div>
      <Outlet/>
    </div>
  );
}

export default Layout;