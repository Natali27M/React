import './App.css';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

const App = () => {
  return (
      <div>
          <div  className={'wrap'}>
              <Users/>
              <Posts/>
          </div>
          <div>
              <Comments/>
          </div>
      </div>
  );
};

export default App;
