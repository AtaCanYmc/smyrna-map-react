import {useEffect, useState} from "react";
import {IzmirMap} from "../../components/map/IzmirMap";
import L from "leaflet";
import {TerminalLoading} from "../../components/loading-icon/terminalLoading/TerminalLoading";

export const MuseumPageContent = () => {
    const [museums, setMuseums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const museumCustomIcon = L.icon({
        iconUrl: require('../../icons/museum.png'), // SVG simgesinin dosya yolu
        iconSize: [24, 24], // İkon boyutu (genişlik, yükseklik)
        iconAnchor: [12, 41], // İkonun harita üzerindeki konumunu ayarlamak için
        popupAnchor: [1, -34], // Popup'ın konumunu ayarlamak için
    });

    const fetchMuseums = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://openapi.izmir.bel.tr/api/ibb/cbs/muzeler');
            if (!response.ok) {
                throw new Error(`API Hatası: ${response.status}`);
            }
            const data = await response.json();
            const museumArr = data['onemliyer'].map((museum, idx) => {
                return {
                    id: idx,
                    name: museum['ADI'],
                    position: [museum['ENLEM'], museum['BOYLAM']],
                    description: museum['ACIKLAMA']
                }
            })
            setMuseums(museumArr);
            setLoading(false);
        } catch (error) {
            if(error.message) {
                setError(error.message);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMuseums();
    }, []);

    return (
        <>
            <h2> Müzeler </h2>
            <TerminalLoading isOpen={loading} />
            <IzmirMap markers={museums} icon={museumCustomIcon}/>
        </>
    );
};