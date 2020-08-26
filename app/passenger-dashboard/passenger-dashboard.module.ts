import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//components
import { PassengerCountComponent } from "./componennts/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./componennts/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./componennts/passenger-form/passenger-form.component";

//service
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    // containers
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // components
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
  ],
  imports: [CommonModule, HttpModule, FormsModule],
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
