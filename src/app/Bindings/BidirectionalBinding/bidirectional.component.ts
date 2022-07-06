import { Component } from "@angular/core";

@Component({
    selector: 'app-bidirection',
    templateUrl:'bidirectional.component.html'
})
export class BiDirectionalComponent{

    public firstName: string = 'Tina'

    textBoxChanged(event:any) {
        
        this.firstName = event.target.value;
    }


   public middleName:string = 'Middle Name'


    private _lastName: string = ''
    
    get lastName() {
        return this._lastName;
    }
    
    set lastName(value: string) {
        this._lastName = value
    }
    
  
}