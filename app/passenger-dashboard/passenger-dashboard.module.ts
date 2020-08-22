import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerCountComponent } from "./componennts/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./componennts/passenger-detail/passenger-detail.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
})
export class PassengerDashboardModule {}
