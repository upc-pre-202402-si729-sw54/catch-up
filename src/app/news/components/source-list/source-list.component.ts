import {Component, EventEmitter, inject, Output, output} from '@angular/core';
import {MatNavList} from "@angular/material/list";
import {NewsApiService} from "../../services/news-api.service";
import {Source} from "../../model/source.entity";
import {SourceItemComponent} from "../source-item/source-item.component";

@Component({
  selector: 'app-source-list',
  standalone: true,
  imports: [
    MatNavList,
    SourceItemComponent
  ],
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent {

  private newsApiService = inject(NewsApiService);
  sources: Array<Source> = [];
  @Output() sourceSelected = new EventEmitter<Source>();

  constructor(){
    this.newsApiService.getSources().subscribe((data: any) => {
      this.sources = data['sources'];
      this.sources.forEach((source: Source) => {
        source.urlToLogo = 'https://logo.clearbit.com/' + new URL(source.url).hostname;
      });
      console.log(this.sources);
    });
  }

  onSourceSelected(source: Source){
    this.sourceSelected.emit(source);
  }

}
