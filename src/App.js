import {Routes,Route} from "react-router-dom";

import {Layout} from './components';
import {EpisodesPage, EpisodeDetailsPage} from "./pages";

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

