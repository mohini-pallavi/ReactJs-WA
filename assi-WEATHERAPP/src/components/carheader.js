import React from "react";
import {CardHeader} from "@material-ui/core"
import WeatherCardSubHeader from "./WeatherCardSubheader"
const WeatherCardHeader =props => {
    const {currentWeather} = props ;


 return( 
<CardHeader
                title={currentWeather.city + ", " + currentWeather.country}
                subheader={
                    <WeatherCardSubheader currentWeather={currentWeather} />
                }
            />
 )}
export default WeatherCardHeader;