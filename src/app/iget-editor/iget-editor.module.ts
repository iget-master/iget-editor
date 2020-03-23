import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {IgetEditorComponent} from './iget-editor.component';
import {MatInputModule} from '@angular/material/input';
import {IgetEditorGrippieComponent} from './iget-editor-grippie/iget-editor-grippie.component';
import {IgetEditorMessageComponent} from './iget-editor-message/iget-editor-message.component';
import {IgetEditorToolbarComponent} from './iget-editor-toolbar/iget-editor-toolbar.component';
import {IgetEditorToolbarGroupComponent} from './iget-editor-toolbar-group/iget-editor-toolbar-group.component';
import {IgetEditorToolbarButtonComponent} from './iget-editor-toolbar-button/iget-editor-toolbar-button.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';
import {CommandExecutorService} from './common/services/command-executor.service';
import {MessageService} from './common/services/message.service';

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
