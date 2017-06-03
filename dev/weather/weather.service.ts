import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {weatherItem} from "./weather-item";

@Injectable()
export class WeatherService{
    constructor(private _http: Http){

    }

    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem1: weatherItem){
        WEATHER_ITEMS.push(weatherItem1);

    }

    searchWeatherData(cityName: String): Observable<any>{
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=aad5f42adb262e45baceca2dd0c1394c&units=metric')
            .map(response => response.json())
            .catch(error => {
                alert("City not found. Check again!");
                console.error(error);
                return Observable.throw(error.json());
            });
    }
    clear(){
        while(WEATHER_ITEMS.length > 0) {
            WEATHER_ITEMS.pop();
        }
    }
}
