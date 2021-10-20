import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("Jhon"),
    address: new FormControl("Somewere"),
    date: new FormControl(new Date(1995, 11, 17)),
  });

  ngOnInit() {
    this.form.get("date")?.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.form.valueChanges.subscribe((value) => {
      if (this.form.touched) {
        console.log(value);
      }
    });
  }

  onSubmit() {
    console.log("Form Submitted");
  }
}
