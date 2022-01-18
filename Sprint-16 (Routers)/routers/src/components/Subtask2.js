import {useSearchParams} from "react-router-dom";

const Subtask2 = () => {
  const [searchParams] = useSearchParams();

  const str = searchParams.toString();
  const allStr = str.replace(/&/gi, ', ');

  return (
    <div>
      Subtask2, query parameters: {allStr}
    </div>
  );
}

export default Subtask2;
