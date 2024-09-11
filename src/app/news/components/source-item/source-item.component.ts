import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatListItem, MatListItemAvatar} from "@angular/material/list";
import {Source} from "../../model/source.entity";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-source-item',
  standalone: true,
  imports: [
    MatListItem,
    MatListItemAvatar,
    NgOptimizedImage
  ],
  templateUrl: './source-item.component.html',
  styleUrl: './source-item.component.css'
})
export class SourceItemComponent {
  @Input() source!: Source;
  @Output() sourceSelected = new EventEmitter<Source>();

  onClick(){
    console.log('Source selected: ', this.source.id);
    this.sourceSelected.emit(this.source);
  }
}
