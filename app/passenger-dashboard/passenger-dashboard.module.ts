import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

//components
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerCountComponent } from "./componennts/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./componennts/passenger-detail/passenger-detail.component";

//service
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [CommonModule, HttpModule],
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
