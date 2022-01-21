import './App.css';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./components";
import {UsersPage, PostsPage, SingleUserPage, SinglePostPage, PostCommentsPage, AlbumPage, PhotoPage} from "./pages";
import {UserPostsPage} from "./pages/UserPostsPage/UserPostsPage";

const App = () => {
    return (
        <div>
            <Routes>

                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumPage/>}>
                            <Route path={':albumId/photos'} element={<PhotoPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>

            </Routes>
        </div>
    );
};

export default App;

