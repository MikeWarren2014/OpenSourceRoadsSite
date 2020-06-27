import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
/* page-level components */
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
/* page-widget components */
import { BannerComponent } from './components/widgets/page/banner/banner.component';
import { MenuComponent } from './components/widgets/page/menu/menu.component';
/* page-section/widget components */
import { WhoWeAreComponent } from './components/sections/who-we-are/who-we-are.component';
import { MessageSentComponent } from './components/pages/contact/message-sent/message-sent.component';
/* widgets */
import { SmallImageCarouselComponent } from './components/widgets/general/small-image-carousel/small-image-carousel.component';
/* services */
import { ContactService } from './services/contact.service';
import { MessageSentService } from './services/message-sent.service';
/* guards */
import { MessageSentGuard } from './guards/message-sent-guard';
/* routes */
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MessageSentComponent,
    WhoWeAreComponent,
    SmallImageCarouselComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService, MessageSentGuard, MessageSentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
