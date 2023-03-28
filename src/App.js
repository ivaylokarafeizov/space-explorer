import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
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
import { Routes, Route } from 'react-router-dom';
import { RouteGuard } from './utils/RouteGuard';

function App() {
    return (
        <>
            <AuthProvider>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route
                        path='/solarSystem'
                        element={<SolarSystem />}
                    ></Route>
                    <Route
                        path='/famousAstronauts'
                        element={<Astronauts />}
                    ></Route>
                    <Route
                        path='/photoOfTheDay'
                        element={<PhotoOfTheDay />}
                    ></Route>
                    <Route
                        path='/posts'
                        element={
                            <RouteGuard>
                                <Posts />
                            </RouteGuard>
                        }
                    />
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<Register />}></Route>
                    <Route
                        path='/details/astronauts/:astronautId'
                        element={<AstronautDetails />}
                    ></Route>
                    <Route
                        path='/details/planets/:planetId'
                        element={<PlanetDetails />}
                    ></Route>
                </Routes>
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;
