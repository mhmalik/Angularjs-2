import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular {{msg}}</h1>`,
}) 
export class AppComponent implements OnInit {
    msg : string = "Startup";
    constructor() {}

    ngOnInit() {}
}