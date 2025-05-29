import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { AboutMe } from './sections/about-me/about-me';
import { MySkills } from './sections/my-skills/my-skills';
import { Services } from './sections/services/services';
import { ServiceCard } from './components/service-card/service-card';

@NgModule({
  declarations: [
    App,
    Navbar,
    AboutMe,
    MySkills,
    Services,
    ServiceCard,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
