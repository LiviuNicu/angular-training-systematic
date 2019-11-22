import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-private-menu",
  templateUrl: "./private-menu.component.html",
  styleUrls: ["./private-menu.component.scss"]
})
export class PrivateMenuComponent implements OnInit {
  @Input() isLoading;
  constructor() {}

  ngOnInit() {}
}
