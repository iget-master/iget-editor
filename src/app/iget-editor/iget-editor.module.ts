import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IgetEditorComponent } from './iget-editor.component';
import { IgetEditorGrippieComponent } from './iget-editor-grippie/iget-editor-grippie.component';
import { IgetEditorMessageComponent } from './iget-editor-message/iget-editor-message.component';
import { IgetEditorToolbarComponent } from './iget-editor-toolbar/iget-editor-toolbar.component';
import { MessageService } from './common/services/message.service';
import { CommandExecutorService } from './common/services/command-executor.service';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {IgetEditorToolbarButtonComponent} from './iget-editor-toolbar-button/iget-editor-toolbar-button.component';
import {IgetEditorToolbarGroupComponent} from './iget-editor-toolbar-group/iget-editor-toolbar-group.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
  ],
  declarations: [
    IgetEditorComponent,
    IgetEditorGrippieComponent,
    IgetEditorMessageComponent,
    IgetEditorToolbarComponent,
    IgetEditorToolbarGroupComponent,
    IgetEditorToolbarButtonComponent,

    /** Dialogs */
    LinkDialogComponent,
  ],
  entryComponents: [
    /** Dialogs */
    LinkDialogComponent,
  ],
  exports: [IgetEditorComponent],
  providers: [CommandExecutorService, MessageService]
})

export class IgetEditorModule { }
