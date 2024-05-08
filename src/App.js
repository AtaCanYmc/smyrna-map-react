import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import {IzmirNavbar} from "./components/navbar/IzmirNavbar";
import {HomePageContent} from "./pages/home/HomePageContent";
import {MuseumPageContent} from "./pages/museum/MuseumPageContent";
import {TrainStationPageContent} from "./pages/train/TrainStationPageContent";
import {MetroStationPageContent} from "./pages/metro/MetroStationPageContent";
import {VapurStationPageContent} from "./pages/vapur/VapurStationPageContent";

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
                        <Route path="/smyrna-map-react/" element={<HomePageContent />} />
                        <Route path="/smyrna-map-react/museum" element={<MuseumPageContent />} />
                        <Route path="/smyrna-map-react/train-stations" element={<TrainStationPageContent />} />
                        <Route path="/smyrna-map-react/metro-stations" element={<MetroStationPageContent />} />
                        <Route path="/smyrna-map-react/vapur-stations" element={<VapurStationPageContent />} />
                    </Routes>
                </Content>
            </Layout>
        </Router>
    );
};

export default App;
