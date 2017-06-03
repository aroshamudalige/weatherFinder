import {Component} from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import {weatherItem} from "./weather-item";
import {WeatherService} from "./weather.service";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {WEATHER_ITEMS} from "./weather.data";
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="#weatherItem of weatherItems"  [item] = "weatherItem"></weather-item>
        </section>
    `,
    directives: [WeatherItemComponent]
})
export class WeatherListComponent implements OnInit{
    weatherItems: weatherItem[];
    constructor(private _weatherService: WeatherService){

    }
    ngOnInit():any{
        this.weatherItems = this._weatherService.getWeatherItems();
    }

}