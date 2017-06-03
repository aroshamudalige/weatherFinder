import {Component} from 'angular2/core';
import {WeatherSearchComponent} from "./weather/weather-search.component";
import {WeatherListComponent} from "./weather/weather-list.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h6>Today: {{time.toDateString()}}</h6>
            <h3>Welcome to Weather App</h3>
        </header>
        <weather-search></weather-search>
        <weather-list></weather-list>
    `,
    directives: [WeatherSearchComponent, WeatherListComponent],
})
export class AppComponent {
    time: Date;

    constructor() {
        this.time = new Date();
        setInterval(() => this.time = new Date(), 1000);
        //console.log(this.time);
    }

}