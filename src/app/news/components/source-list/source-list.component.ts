import {Component, inject} from '@angular/core';
import {MatNavList} from "@angular/material/list";
import {NewsApiService} from "../../services/news-api.service";

@Component({
  selector: 'app-source-list',
  standalone: true,
  imports: [
    MatNavList
  ],
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent {

  private newsApiService = inject(NewsApiService);
  sources: any;

  constructor(){
    this.newsApiService.getSources().subscribe(data => {
      // @ts-ignore
      this.sources = data['sources'];
      console.log(this.sources);
    });
  }

}
