import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../containers/models/passenger.interface";

@Component({
  selector: "passenger-detail",
  templateUrl: "passenger-detail.component.html",
  styleUrls: ["passenger-detail.component.scss"],
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  onNameChange(value: string) {
    console.log("Value:", value);
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
