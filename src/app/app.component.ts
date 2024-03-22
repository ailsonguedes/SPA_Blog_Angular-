import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './pages/home/home.module'


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeModule]
})
export class AppComponent {
  line:string = '';

}
