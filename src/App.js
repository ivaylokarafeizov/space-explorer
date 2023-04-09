import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import { CreatePost } from './components/CreatePost/CreatePost.js';
import { EditPost } from './components/EditPost/EditPost.js';
import Posts from './components/Posts/Posts.js';
import Login from './components/Login/Login.js';
import { Logout } from './components/Logout/Logout';
import Register from './components/Register/Register.js';
import PlanetDetails from './components/PlanetDetails/PlanetDetails.js';
import AstronautDetails from './components/AstronautDetails/AstronautDetails.js';
import Astronauts from './components/Astronauts/Astronauts.js';
import SolarSystem from './components/SolarSystem/SolarSystem.js';
import PhotoOfTheDay from './components/PhotoOfTheDay/PhotoOfTheDay.js';
import { AuthProvider } from './contexts/AuthContext';
import { PostsProvider } from './contexts/PostsContext';
import PostDetails from './components/PostDetails/PostDetails.js';
import { Routes, Route } from 'react-router-dom';
import { RouteGuard } from './components/common/RouteGuard.js';
import { PostOwner } from './components/common/PostOwner.js';
import ScrollToTop from './components/common/ScrollToTop';
import { EditComment } from './components/EditComment/EditComment.js';

function App() {
    return (
        <>
            <AuthProvider>
                <PostsProvider>
                    <Header />
                    <ScrollToTop />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/solarSystem' element={<SolarSystem />} />
                        <Route
                            path='/famousAstronauts'
                            element={<Astronauts />}
                        />
                        <Route
                            path='/photoOfTheDay'
                            element={<PhotoOfTheDay />}
                        />
                        <Route element={<RouteGuard />}>
                            <Route path='/create' element={<CreatePost />} />
                            <Route
                                path='/edit/:postId/:commentId'
                                element={<EditComment />}
                            />
                            <Route
                                path='/details/:postId'
                                element={<PostDetails />}
                            />
                            <Route
                                path='/edit/:postId'
                                element={
                                    <PostOwner>
                                        <EditPost />
                                    </PostOwner>
                                }
                            />
                            <Route path='/logout' element={<Logout />} />
                            <Route
                                path='/posts'
                                element={
                                    <RouteGuard>
                                        <Posts />
                                    </RouteGuard>
                                }
                            />
                        </Route>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route
                            path='/details/astronauts/:astronautId'
                            element={<AstronautDetails />}
                        />
                        <Route
                            path='/details/planets/:planetId'
                            element={<PlanetDetails />}
                        />
                    </Routes>
                    <Footer />
                </PostsProvider>
            </AuthProvider>
        </>
    );
}

export default App;
