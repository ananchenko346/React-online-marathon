import {useParams} from "react-router-dom";

const Subtask1 = () => {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      Subtask1, parameter: {id}
    </div>
  )
}

export default Subtask1;