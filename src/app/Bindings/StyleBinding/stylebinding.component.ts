import { Component } from "@angular/core";

@Component({
    selector: 'app-stylebinding',
    templateUrl: 'stylebinding.component.html',
    styleUrls:['stylebinding.component.css']
})
export class StyleBindingComponent{

    public myColor: string = 'green'
    public hasError: boolean = true;

    public multipleStyles = {
        color: 'blue',
        fontStyle: 'italic',
        backgroundColor:'yellow'
    }

}