import { Component } from "@angular/core";

@Component({
    selector: 'app-eventbinding',
    templateUrl:'eventbinding.component.html'
})
export class EventBindingComponent{

    public greetingMessage: string = 'Initial Message'

    public message:string = ''
    
    onGreet() {
        this.greetingMessage = 'Welcome to Zensar!!!'
        console.log('Welcome to Zensar!!!')
    }

    onGreetWithParameter(event: any) {
        this.message = `Message - ${event.type}`
        console.log(event)
    }

    onMouseEnter(event: any) {
        console.log(event)
    }
    

}