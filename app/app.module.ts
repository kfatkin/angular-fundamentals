import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./notfound.component";

import { AppComponent } from "./app.component";
import { config } from "process";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // redirectTo: "passengers",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    // custom modules
    RouterModule.forRoot(routes),
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
