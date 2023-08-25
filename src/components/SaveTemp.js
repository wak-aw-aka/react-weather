import React, { useState } from "react";
import axios from "axios";
import {Button} from "react-bootstrap";

export default function SaveTemp() {

    const [appState, setAppState] = useState({
        loading: false,
        weather: null,
    });
    const fetchWeather = async () => {
        setAppState({ loading: true, weather: null });
        try {
            axios.get(process.env.REACT_APP_API_URL + 'weather/save').then((data) => {
                setAppState({loading: false, weather: data.data});
            });
        } catch (error) {
            console.error('Error:', error);
            setAppState({loading: false, weather: null});
        }
    }

    return (
        <div className="row">
            {(appState.weather != null && appState.weather.ok === true) &&
                <div className="row" style={{marginBottom: "30px"}}>
                    <table className="table" style={{width: "350px", margin: "0 auto"}}>
                        <thead>
                            <tr style={{color: "white"}}>
                                <td>Дата:</td>
                                <td>{appState.weather.data.date}</td>
                            </tr>
                            <tr style={{color: "white"}}>
                                <td colSpan={2}>{appState.weather.data.data}</td>
                            </tr>
                            <tr style={{color: "white"}}>
                                <td colSpan={2}><strong>Данные получены и успешно сохранены!</strong></td>
                            </tr>
                        </thead>
                    </table>
                </div>
            }
            <Button variant="primary" style={{width: '300px', margin: '0 auto 20px'}} onClick={fetchWeather}>Сохранить температуру</Button>
        </div>
    );
}