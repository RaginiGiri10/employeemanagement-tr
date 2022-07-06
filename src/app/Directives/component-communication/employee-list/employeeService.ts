import {IEmployee} from '../../../models/employeeModels/employee'

export class EmployeeService{


    getAllEmployees():IEmployee[] {
        
        return  [
            { id: 1, firstName: 'Tina', lastName: 'Thomas', age: 23,gender:'female' },
            { id: 2, firstName: 'Varun', lastName: 'Rathore', age: 33, gender: 'male' },
            { id: 3, firstName: 'Jeena', lastName: 'Vijay', age: 22,gender:'female' }
           ]
    }

}