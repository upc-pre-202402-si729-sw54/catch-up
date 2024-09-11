import {Component, inject, Input, OnInit} from '@angular/core';
import {Article} from "../../model/article.entity";
import {NewsApiService} from "../../services/news-api.service";
import {ArticleItemComponent} from "../article-item/article-item.component";
import {Source} from "../../model/source.entity";
import {Subject} from "rxjs";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleItemComponent
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {

  private newsApiService = inject(NewsApiService);
  articles: Array<Article> = [];

  @Input() sourceSelected!: Subject<Source>;

  ngOnInit(){

    this.newsApiService.initArticles().subscribe((data: any) => {
      this.parseArticles(data);
    });

    this.sourceSelected.subscribe((source: Source) => {
      this.onSourceSelected(source);
    });
  }

  onSourceSelected(source: Source){
    this.newsApiService.getArticlesBySourceId(source.id).subscribe((data: any) => {
      this.parseArticles(data);
    });
  }

  parseArticles(data: any){
    this.articles = data['articles'];
    this.articles.forEach((article: Article) => {
      article.source.urlToLogo = 'https://logo.clearbit.com/' + new URL(article.url).hostname;
      article.source.url = article.url
    });
    console.log(this.articles);
  }
}
