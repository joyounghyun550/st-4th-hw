import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈(메인)페이지 입니다.</h1>
      <Link to={"./Detail"}>Detail 컴포넌트로 이동</Link>
    </div>
  );
};

export default Home;
