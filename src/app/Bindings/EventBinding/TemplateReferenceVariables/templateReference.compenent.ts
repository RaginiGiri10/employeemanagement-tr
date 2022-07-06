import { Component } from "@angular/core";

@Component({
    selector: 'app-template-reference',
    templateUrl:'templateReference.component.html'
})
export class TemplateReferenceComponent{

    logMessage(input:any) {
        
        console.log(`Textbox value is ${input}`)
    }

    logMessageWithReference(input:any) {
        
        console.log(`Textbox value is ${input.value}`)
    }
}