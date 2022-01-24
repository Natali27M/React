import {Routes,Route} from "react-router-dom";

import './App.css';
import {Layout} from './components';
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage/EpisodeDetailsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'episode'} element={<EpisodesPage/>}/>
                    <Route path={'episodeDetails'} element={<EpisodeDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;

