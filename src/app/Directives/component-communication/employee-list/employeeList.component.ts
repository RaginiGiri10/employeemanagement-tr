import { Component,OnInit } from "@angular/core"
import { IEmployee } from '../../../models/employeeModels/employee'
import {EmployeeService} from './employeeService'

@Component({
    selector: 'app-employee-list',
    templateUrl: 'employeeList.component.html',
    providers:[]
})
export class EmployeeListComponent implements OnInit{

    employees: IEmployee[] = []

    selectedGenderFilter: string = 'all'
     _employeeService:EmployeeService

    constructor(employeeService:EmployeeService) {
      
        this._employeeService = employeeService;
    }
  

    ngOnInit(): void {
        this.employees =this._employeeService.getAllEmployees()
    }

    getTotalEmployeeCount(): number{
        return this.employees.length;
    }

    getMaleEmployeeCount(): number{
        return this.employees.filter(e => e.gender === 'male').length;
    }

    getFemaleEmployeeCount(): number{
        return this.employees.filter(e => e.gender === 'female').length;
    }

    onSelectedFilter(selectedValue: string) {
        this.selectedGenderFilter = selectedValue;
    }
}