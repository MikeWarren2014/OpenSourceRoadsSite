import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/dashboard/banner/banner.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { AboutComponent } from './components/dashboard/about/about.component';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/dashboard/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageSentComponent } from './components/dashboard/message-sent/message-sent.component';
import { MessageSentGuard } from './guards/message-sent-guard';
import { MessageSentService } from './services/message-sent.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MessageSentComponent
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
