import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import {IzmirNavbar} from "./components/navbar/IzmirNavbar";
import {HomePageContent} from "./pages/home/HomePageContent";
import {MuseumPageContent} from "./pages/museum/MuseumPageContent";
import {TrainStationPageContent} from "./pages/train/TrainStationPageContent";
import {MetroStationPageContent} from "./pages/metro/MetroStationPageContent";

const { Header, Content } = Layout;

const App = () => {
    return (
        <Router>
            <Layout>
                <Header>
                    <IzmirNavbar />
                </Header>
                <Content style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<HomePageContent />} />
                        <Route path="/museum" element={<MuseumPageContent />} />
                        <Route path="/train-stations" element={<TrainStationPageContent />} />
                        <Route path="/metro-stations" element={<MetroStationPageContent />} />
                    </Routes>
                </Content>
            </Layout>
        </Router>
    );
};

export default App;
