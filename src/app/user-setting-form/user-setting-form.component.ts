import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  OriginalUserSettings: UserSettings = {
     name: null,
     emailOffers: null,
     interfaceStyle: null,
     subscritionType: null,
     notes: null
  };

  userSettings: UserSettings = { ...this.OriginalUserSettings }

  constructor() { }

  ngOnInit() {
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }

}
