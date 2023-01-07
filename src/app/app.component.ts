import { Component } from '@angular/core';
import {TestService} from "./servicios/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  saludo:string = '';

  constructor(private TestService: TestService) {}
  title = "personal";

  realizarSaludo(){
    this.saludo = this.TestService.saluda();
  }
}

