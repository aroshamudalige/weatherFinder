/**
 * Created by Arosha on 6/2/2017.
 */
import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {weatherItem} from "./weather-item";
import {WeatherService} from "./weather.service";

@Component({
    selector: 'weather-search',
    template: ` 
        <section class="weather-search">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <label for="city">City</label>
                <input type="text" ngControl="location" id="city" required>
                <button type="submit">Go</button>
            </form>
            <button type="submit" (click)="clearall()">Clear All</button>
            <br><br>
            <div >Enter the name of the city and click on Go button to see its current weather conditions.</div>
        </section>
    `
})
export class WeatherSearchComponent{
    constructor(private _weatherService: WeatherService){

    }
    onSubmit(form: ControlGroup){       //form is a type of control group
        this._weatherService.searchWeatherData(form.value.location)
            .subscribe(
                data => {
                    const passed_weatheritem = new weatherItem(data.name, data.weather[0]
                        .description, data.main.temp);
                    this._weatherService.addWeatherItem(passed_weatheritem);
                }
            );

    }
    clearall(){
        this._weatherService.clear();
    }
}
