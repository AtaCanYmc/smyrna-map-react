import {Menu} from "antd";
import {CarOutlined, HomeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

export const IzmirNavbar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="Anasayfa" icon={<HomeOutlined />}>
                <Link to="/">Anasayfa</Link>
            </Menu.Item>
            <SubMenu key="SubMenuUlaşım" icon={<CarOutlined />} title="Ulaşım">
                <Menu.Item key="Otobüsler">
                    <Link to="/bus">Otobüsler</Link>
                </Menu.Item>
                <Menu.Item key="Tren İstasyonları">
                    <Link to="/train-stations">Tren İstasyonları</Link>
                </Menu.Item>
                <Menu.Item key="Metro İstasyonları">
                    <Link to="/metro-stations">Metro İstasyonları</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="SubMenuKültür" icon={<CarOutlined />} title="Kültürel">
                <Menu.Item key="Müzeler">
                    <Link to="/museum">Müzeler</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="SubMenuGenel" icon={<CarOutlined />} title="Genel">
            </SubMenu>
        </Menu>
    );
}