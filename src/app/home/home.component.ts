import { Component, OnInit } from "@angular/core";
import { TimeService } from "../time-service.service";
import { Title, Meta } from "@angular/platform-browser";
import { MetaService } from "../meta-service.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private ts: TimeService,
    private _title: Title,
    private _meta: Meta,
    private metaService: MetaService
  ) {}

  yearsPracticed: number;

  ngOnInit() {
    this.yearsPracticed = this.ts.getYearsPracticing();
    this._title.setTitle("Alex Lau Acupuncture");
    this._meta.updateTag({
      name: "description",
      content: "Home of Alex Lau Acupuncture",
    });
    this.metaService.createCanonicalURL();
  }

  ngOnDestroy() {
    this.metaService.deleteCanonicalURL();
  }
  // Homepage background image
  image = "./assets/zen.jpg";
}
