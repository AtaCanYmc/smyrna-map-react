import {Menu} from "antd";
import {CarOutlined, HomeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

export const IzmirNavbar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="Anasayfa" icon={<HomeOutlined />}>
                <Link to="/smyrna-map-react/">Anasayfa</Link>
            </Menu.Item>
            <SubMenu key="SubMenuUlaşım" icon={<CarOutlined />} title="Ulaşım">
                <Menu.Item key="Otobüsler">
                    <Link to="/smyrna-map-react/bus">Otobüsler</Link>
                </Menu.Item>
                <Menu.Item key="Tren İstasyonları">
                    <Link to="/smyrna-map-react/train-stations">Tren İstasyonları</Link>
                </Menu.Item>
                <Menu.Item key="Metro İstasyonları">
                    <Link to="/smyrna-map-react/metro-stations">Metro İstasyonları</Link>
                </Menu.Item>
                <Menu.Item key="Vapur İskeleleri">
                    <Link to="/smyrna-map-react/vapur-stations">Vapur İskeleleri</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="SubMenuKültür" icon={<CarOutlined />} title="Kültürel">
                <Menu.Item key="Müzeler">
                    <Link to="/smyrna-map-react/museum">Müzeler</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="SubMenuGenel" icon={<CarOutlined />} title="Genel">
            </SubMenu>
        </Menu>
    );
}