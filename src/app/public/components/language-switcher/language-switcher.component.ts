import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    NgForOf
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  currentLang: string = 'en';
  languages: string[] = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  useLanguage(lang: string) {
    this.translate.use(lang);
  }

}
