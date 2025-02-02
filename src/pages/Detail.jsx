import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();

  console.log(param.id);

  return (
    <div>
      <h1>Detail{param.id}페이지 입니다.</h1>
    </div>
  );
};

export default Detail;
