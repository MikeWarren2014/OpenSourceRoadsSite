import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from "./app.component";
/* page-level components */
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
/* page-widget components */
import { BannerComponent } from "./components/widgets/page/banner/banner.component";
import { MenuComponent } from "./components/widgets/page/menu/menu.component";
/* page-section/widget components */
import { WhoWeAreComponent } from "./components/sections/who-we-are/who-we-are.component";
import { MessageSentComponent } from "./components/pages/contact/message-sent/message-sent.component";
/* widgets */
import { ImageCarouselComponent } from "./components/widgets/general/image-carousel/image-carousel.component";
import { LoaderComponent } from "./components/widgets/general/loader/loader.component";
/* services */
import { ContactService } from "./services/contact.service";
import { MessageSentService } from "./services/message-sent.service";
/* guards */
import { MessageSentGuard } from "./guards/message-sent-guard";
/* routes */
import { routes } from "./app.routing";
import { HowWeGotStartedComponent } from "./components/sections/how-we-got-started/how-we-got-started.component";
import { BaseComponent } from "./components/base/base.component";
import { LoaderWrapperComponent } from "./components/base/loader-wrapper/loader-wrapper.component";

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
    ImageCarouselComponent,
    LoaderComponent,
    HowWeGotStartedComponent,
    LoaderWrapperComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgbModule, // TODO: this may be a YAGNI. This was placed in here automatically.
    NgxSpinnerModule,
  ],
  providers: [ContactService, MessageSentGuard, MessageSentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
