import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.authReducer);

  return <div>Home {userInfo.firstName + userInfo.lastName}</div>;
};

export default Home;
