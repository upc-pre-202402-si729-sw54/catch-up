import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LanguageSwitcherComponent, FooterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catch-up';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
