import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContainerComponent } from './container/container.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { HttpClientModule } from '@angular/common/http';
import { ContactDialogComponent } from './modals/contact-dialog/contact-dialog.component'; // Import here


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeadSectionComponent,
    SkillsComponent,
    PortfolioComponent,
    AboutComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    ImprintComponent,
    ContainerComponent,
    LegalNoticeComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
