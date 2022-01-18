import {Routes, Route} from "react-router-dom";

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import SingleUserPage from "./pages/SinglePostPage/SingleUserPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'users/:id'} element={<SingleUserPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;

