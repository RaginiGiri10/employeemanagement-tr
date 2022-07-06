import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-employee-count',
    templateUrl:'employeeCount.component.html'
})
export class EmployeeCountComponent {

    @Input()
    allEmployees: number = 0
    @Input()
    maleEmployees: number = 0
    @Input()
    femaleEmployees: number = 0

    @Input()
    name:string =''
    
    selectedRadioButtonGenderValue: string = 'all'

    @Output()
    genderRadioButtonSelectionChangedEvent:EventEmitter<string> = new EventEmitter<string>()
    

    onGenderRadioButtonSelection() {
        this.genderRadioButtonSelectionChangedEvent.emit(this.selectedRadioButtonGenderValue)
    }

}