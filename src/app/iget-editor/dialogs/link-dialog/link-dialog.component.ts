import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';

export interface LinkDialogData {
  selection: any;
}

@Component({
  selector: 'iget-editor-link-dialog',
  templateUrl: './link-dialog.component.html',
  styleUrls: ['./link-dialog.component.scss'],
  providers: []
})
export class LinkDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: LinkDialogData
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm();

    if (this.data.selection) {
      this.form.patchValue({
        label: this.data.selection.toString()
      });
    }
  }

  private buildForm() {
    return this.formBuilder.group({
      'label': [null, [Validators.required]],
      'url': [null, [Validators.required]],
    });
  }
}
