import { Component } from '@angular/core';

@Component({
  selector: 'app-text-content',
  standalone: true,
  imports: [],
  templateUrl: './text-content.component.html',
  styleUrl: './text-content.component.scss'
})
export class TextContentComponent {
  textContent:string = `

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae fringilla nunc. Donec placerat vulputate nibh vel pulvinar. Donec eu ipsum ullamcorper, posuere nisi iaculis, porta diam. Aenean in urna ut diam pretium commodo eget nec velit. Aliquam convallis blandit sagittis. Etiam condimentum nibh turpis, at ultrices neque hendrerit quis. Suspendisse elementum scelerisque sollicitudin. Praesent pulvinar nec leo a auctor. Nam tempus mauris metus, quis porttitor urna posuere sit amet. Mauris sit amet fermentum purus.

  Donec sed neque orci. Aliquam in libero fringilla, finibus dui nec, euismod quam. Mauris sollicitudin in ex gravida tempor. Nullam sed nibh pretium, pretium velit et, dictum quam. Aliquam sed nunc eget mauris ultrices efficitur. Mauris mauris erat, varius a massa sed, condimentum posuere quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In semper, leo eget sodales efficitur, neque nisi ullamcorper massa, ut mollis sapien lectus sed risus. Praesent varius cursus mauris eget dictum. In et metus lorem. Vivamus nibh ligula, hendrerit in consequat at, dictum in magna. Nulla facilisi. Vestibulum dui diam, rutrum sit amet lobortis id, molestie vitae dui. Ut tempus elementum justo, nec dignissim orci malesuada a. `;
}
