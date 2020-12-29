import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-wysiwig',
  templateUrl: './wysiwig.component.html',
  styleUrls: ['./wysiwig.component.css']
})
export class WysiwigComponent implements OnInit {
  form: FormGroup;
  editorConfig: AngularEditorConfig = {};


  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      htmlContent:  new FormControl('')
    });

    this.createWysi();
  }

  private createWysi(): void {
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '18rem',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Ingrese su texto aqui',
      defaultParagraphSeparator: '',
      defaultFontName: 'Arial',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
    };
  }

}
