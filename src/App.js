import {Routes,Route} from "react-router-dom";

import {Layout} from "./components";
import {CarsPage, UsersPage, PostsPage, CommentsPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;

