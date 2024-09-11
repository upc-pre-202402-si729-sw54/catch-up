import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

/**
 * News Api Service
 * @class NewsApiService
 * @description Service to fetch news data from News API
 * @method getSources - Method to get news sources
 * @method getArticlesBySourceId - Method to get articles by source id
 * @method initArticles - Method to get articles by source id
 * @property {string} apiKey - The api key for news api
 * @property {string} baseUrl - The base url for news api
 * @property {HttpClient} http - The http client
 *
 */
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private apiKey: string = `${environment.newsApiKey}`;
  private baseUrl: string = 'https://newsapi.org/v2';
  private http: HttpClient = inject(HttpClient);

  /**
   * @method getSources
   * @description Method to get news sources
   * @returns An observable with the response data
   */
  getSources() {
    return this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }
}
