import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { AuthorsComponent } from "./pages/authors/authors.component";
import { LayouPageComponent } from "./pages/layou-page/layou-page.component";
import { TopicsComponent } from "./pages/topics/topics.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";

const routes: Routes = [
  {
    path: '',
    component: LayouPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'autores', component: AuthorsComponent},
      { path: 'topics', component: TopicsComponent},
      { path: 'sobre-nosotros', component: AboutUsComponent},
      { path: 'contactanos', component: ContactUsComponent},
      { path: '**', redirectTo: 'home'}
    ]
  },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrasesRoutingModule{}
