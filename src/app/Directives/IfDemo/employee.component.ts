import { Component } from "@angular/core";

@Component({
    selector: 'app-employee',
    templateUrl:'employee.component.html'
})
export class EmployeeComponent{

    firstName: string = 'James'
    lastName: string = 'Bond'
    gender: string = 'Male'
    age: number = 55
    
    showDetails: boolean = true;

    toggleDetails() {
        this.showDetails = !this.showDetails
    }

}