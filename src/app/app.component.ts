import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { LineComponent } from "./line/line.component";
import { TextContentComponent } from "./text-content/text-content.component";
import { SubtitleComponent } from "./subtitle/subtitle.component"

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TitleComponent, LineComponent, TextContentComponent, SubtitleComponent]
})
export class AppComponent {
  line:string = '';

}
