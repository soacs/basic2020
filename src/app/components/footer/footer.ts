
import { NgModule, Component } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.css'],
})
export default class FooterComponent {
    content: string;

    constructor() {
        this.content = "FooterComponent";
    }
}
