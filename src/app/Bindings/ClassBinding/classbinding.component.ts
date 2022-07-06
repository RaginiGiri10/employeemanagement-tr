import {Component} from '@angular/core'

@Component({
    selector: 'app-classbinding',
    templateUrl: 'classbinding.component.html',
    styleUrls:['classbinding.component.css']
})
export class ClassBindingComponent{

    public successClass: string = 'text-success'
    public dangerClass: string = "text-danger"    
    public hasError: boolean = true    
    public isSpecial: boolean = true;

    public messageClass = {
        'text-success': !this.hasError,
        'text-danger': this.hasError,
        'text-special':this.isSpecial
    }
}