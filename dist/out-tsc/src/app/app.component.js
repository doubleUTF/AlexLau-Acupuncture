var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as moment from 'moment';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.calendarOptions = {
            events: [
                {
                    id: '1',
                    start: moment('2017-02-01 10:15'),
                    end: moment('2017-02-01 10:30'),
                },
                {
                    id: '2',
                    start: moment('2017-02-01 10:30'),
                    end: moment('2017-02-01 10:45'),
                    rendering: 'background'
                }
            ],
            defaultView: 'agendaWeek',
            views: {
                agenda: {
                    slotDuration: '00:15:00',
                    minTime: '08:00',
                    maxTime: '19:00',
                    allDaySlot: false
                }
            },
            header: {
                right: 'agendaWeek today prev, next'
            },
            businessHours: [{
                    dow: [1, 2, 3, 4, 5],
                    start: '10:00',
                    end: '18:00'
                }, {
                    dow: [6],
                    start: '09:00',
                    end: '12:00'
                }],
            fixedWeekCount: false,
            editable: true,
            eventLimit: true
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../../src/app/app.component.js.map