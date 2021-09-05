import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { OffersComponent } from './offers/offers.component';
import { AboutUsComponent } from './about us/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { OffersAttractionComponent } from './offers/offers-attractions/offers-attractions.component';
import { OffersSummerComponent } from './offers/offers-summer/offers-summer.component';
import { OffersWinterComponent } from './offers/offers-winter/offers-winter.component';
import { MatFormFieldModule } from '@angular/material/form-field';



//WFv91rkbuyeYYQ1f sifra za mongodb

@NgModule({
  declarations: [
    ToolbarComponent,
    AppComponent,
    HomeComponent,
    OffersComponent,
    AboutUsComponent,
    AppRoutingModule,
    OffersAttractionComponent,
    OffersSummerComponent,
    OffersWinterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    NgModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
