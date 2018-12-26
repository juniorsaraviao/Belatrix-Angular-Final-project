import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ArticleService } from './article.service';
import { RatingComponent } from './article/rating/rating.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { DescriptionComponent } from './about/description/description.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component:HomeComponent,pathMatch:'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    AboutComponent,
    RatingComponent,
    SocialbarComponent,
    ServiciosComponent,
    DescriptionComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
