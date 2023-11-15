import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedMatModule } from './shared-mat/shared-mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScanComponent } from './scan/scan.component'
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scan', component: ScanComponent },
]

LOAD_WASM().subscribe();
@NgModule({
  declarations: [AppComponent, HomeComponent, ScanComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedMatModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    FormsModule,
    AppRoutingModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
