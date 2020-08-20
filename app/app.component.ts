import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number | null;
  children?: Child[] | null;
}

interface Child {
  name: string;
  age: number;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  templateUrl: "app.component.html",
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: "Stephen",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null,
  }, {
    id: 2,
    fullname: "Rose",
    checkedIn: false,
    checkInDate: null,
    children: [{ name: "Ted", age: 12 }, { name: "Chloe", age: 7 }],
  }, {
    id: 3,
    fullname: "James",
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null,
  }, {
    id: 4,
    fullname: "Louise",
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: "Jessica", age: 1 }],
  }, {
    id: 5,
    fullname: "Tina",
    checkedIn: false,
    checkInDate: null,
    children: null,
  }];
  constructor() {}
}
