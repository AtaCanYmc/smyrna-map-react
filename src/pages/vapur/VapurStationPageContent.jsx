import {useEffect, useState} from "react";
import {IzmirMap} from "../../components/map/IzmirMap";
import L from "leaflet";
import {TerminalLoading} from "../../components/loading-icon/terminalLoading/TerminalLoading";
import {SimpleErrorPopup} from "../../components/simpleErrorPopup/SimpleErrorPopup";
import {saveToOracle} from "../../utils";

export const VapurStationPageContent = () => {
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const customIcon = L.icon({
        iconUrl: require('../../icons/boat.png'), // SVG simgesinin dosya yolu
        iconSize: [24, 24], // İkon boyutu (genişlik, yükseklik)
        iconAnchor: [12, 41], // İkonun harita üzerindeki konumunu ayarlamak için
        popupAnchor: [1, -34], // Popup'ın konumunu ayarlamak için
    });

    const fetchStations = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://openapi.izmir.bel.tr/api/izdeniz/iskeleler');
            if (!response.ok) {
                throw new Error(`API Hatası: ${response.status}`);
            }
            const data = await response.json();
            const StationArr = data.map((station, idx) => {
                const aktiflik = station['AktifMi'] ? 'Aktif Durumda' : 'Pasif Durumda'
                const arabali = station['ArabaliVapurIskelesiMi'] ? 'Arabalı iskele' : 'Arabasız iskele'
                return {
                    id: idx,
                    name: station['Adi'],
                    position: [station['Enlem'], station['Boylam']],
                    description: aktiflik + ' | ' + arabali
                }
            })
            setStations(StationArr);
            await saveToOracle("https://apex.oracle.com/pls/apex/olympos_db/smyrna/vapur-iskele", data);
            setLoading(false);
        } catch (error) {
            await fetchFromOracle("https://apex.oracle.com/pls/apex/olympos_db/smyrna/vapur-iskele");
            setLoading(false);
        }
    };

    const fetchFromOracle = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            if (!response.ok) {
                throw new Error(`API Hatası: ${response.status}`);
            }
            const data = await response.json();
            const stationArr = data['items'].map((station, idx) => {
                return {
                    id: idx,
                    name: station['adi'],
                    position: [station['enlem'], station['boylam']],
                    description: station['aktifmi'] + ' | ' + station['arabalivapuriskelesimi']
                }
            })
            setStations(stationArr);
            setLoading(false);
        } catch (error) {
            if(error.message) {
                setError(true);
                setErrorMessage(error.message);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStations();
    }, []);

    return (
        <>
            <h2> Vapur İskeleleri </h2>
            <TerminalLoading isOpen={loading} />
            <SimpleErrorPopup isPopupOpen={error}
                              onClose={() => setError(false)}
                              messageText={errorMessage}
                              buttonText={"OK"}
            />
            <IzmirMap markers={stations} icon={customIcon}/>
        </>
    );
};