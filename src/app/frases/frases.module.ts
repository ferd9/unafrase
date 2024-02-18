import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './pages/authors/authors.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { FrasesRoutingModule } from './frases-routing.module';
import { LayouPageComponent } from './pages/layou-page/layou-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    AuthorsComponent,
    LayouPageComponent,
    TopicsComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FrasesRoutingModule
  ]
})
export class FrasesModule { }
