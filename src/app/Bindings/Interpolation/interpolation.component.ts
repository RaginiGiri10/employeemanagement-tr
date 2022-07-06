import {Component} from '@angular/core'

@Component({
    selector: 'app-bindings',
    templateUrl:'interpolation.component.html'
})
export class InterpolationComponent{

    public companyName: string = 'Zensar!!!'
    
    getCompanyName(): string{
        return 'Zensar'
    }

}