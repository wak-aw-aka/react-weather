import {Button} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";

export default function DataTemp() {

    const [appState, setAppState] = useState({
        loading: false,
        weatherList: null,
    });

    const fetchWeatherList = async () => {
        setAppState({ loading: true, weatherList: null });
        try {
            axios.post(process.env.REACT_APP_API_URL + 'weather/list').then((data) => {
                setAppState({loading: false, weatherList: data.data});
            });
        } catch (error) {
            console.error('Error:', error);
            setAppState({loading: false, weatherList: null});
        }
    }

    return (
        <div className="row">
            <Button variant="primary" onClick={fetchWeatherList} style={{width: '300px', margin: '0 auto 20px'}}>Получить список</Button>
            {(appState.weatherList != null && appState.weatherList.ok === true) &&
                <div className="row" style={{marginBottom: "30px"}}>
                    {appState.weatherList.data.map((data, index) => {
                        return (
                            <div className="row">
                                <table className="table" style={{width: "350px", margin: "0 auto"}}>
                                    <thead>
                                        <tr style={{color: "white"}}>
                                            <td>Дата:</td>
                                            <td>{data.date}</td>
                                        </tr>
                                        <tr style={{color: "white"}}>
                                            <td colSpan={2}>{data.data}</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            )
                    })}
                </div>
            }
        </div>
    );
}