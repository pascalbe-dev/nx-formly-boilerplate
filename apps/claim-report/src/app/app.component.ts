import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { getReportPersonForm } from '@nx-formly-boilerplate/ui-forms';

@Component({
  selector: 'nx-formly-boilerplate-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public model: any = {};
  public fields: FormlyFieldConfig[] = [];

  ngOnInit(): void {
    this.fields = getReportPersonForm();
  }
}
