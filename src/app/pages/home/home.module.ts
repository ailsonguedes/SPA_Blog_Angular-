import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component'
import { TitleComponent }  from './title/title.component'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticleComponent,
    TitleComponent
  ],
  exports: [
    ArticleComponent,
    TitleComponent
  ]
})
export class HomeModule { }
