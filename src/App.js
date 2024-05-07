import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import {IzmirNavbar} from "./components/navbar/IzmirNavbar";
import {HomePageContent} from "./pages/home/HomePageContent";
import {MuseumPageContent} from "./pages/museum/MuseumPageContent";

const { Header, Content } = Layout;

const Settings = () => <h2>Settings Page</h2>;

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
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </Content>
            </Layout>
        </Router>
    );
};

export default App;
