import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

const ServoData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.29.153/servoData');
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading data...</div>;
    }

    // Access and display servo data (assuming data structure as before)
    return (
        <div>
            <h2>Servo Data</h2>
            <Grid container direction="row"  justifyContent='space-around'>
                {data.servos.map((servo, index) => (
                    <Grid item>
                        <div key={index}>
                            <h3>Servo {servo.servoId}</h3>
                            <ul>
                                <li>Position: {servo.Pos}</li>
                                <li>Speed: {servo.Speed}</li>
                                <li>Load: {servo.Load}</li>
                                <li>Voltage: {servo.Voltage}</li>
                                <li>Temperature: {servo.Temper}</li>
                                <li>Moving: {servo.Move}</li>
                                <li>Current: {servo.Current}</li>
                            </ul>
                        </div>
                    </Grid>
                                                        
                ))}
            </Grid>
        </div>
    );
};

export default ServoData;
