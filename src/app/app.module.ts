import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';

// Route
import { AppRoutingModule } from './/app-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PostsDetailComponent } from './pages/posts-detail/posts-detail.component';

// Shared
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

// Component
import { PostArchiveComponent } from './components/post-archive/post-archive.component';
import { RecentPostComponent } from './components/recent-post/recent-post.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';
import { PostsCardRecentComponent } from './components/posts-card-recent/posts-card-recent.component';
import { PostCardHorizontalComponent } from './components/post-card-horizontal/post-card-horizontal.component';



@NgModule({
  declarations: [
    AppComponent,

    // Shared
    NavbarComponent,
    FooterComponent,

    // Pages
    HomeComponent,
    CategoriesComponent,
    PostsDetailComponent,

    // Components
    PostsCardComponent,
    PostArchiveComponent,
    RecentPostComponent,
    TagsComponent,
    PostsCardRecentComponent,
    PostCardHorizontalComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
