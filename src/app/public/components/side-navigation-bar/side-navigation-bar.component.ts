import {Component, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {FooterContentComponent} from "../footer-content/footer-content.component";
import {SourceListComponent} from "../../../news/components/source-list/source-list.component";
import {ArticleListComponent} from "../../../news/components/article-list/article-list.component";
import {Source} from "../../../news/model/source.entity";
import {Subject} from "rxjs";

@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatToolbar,
    MatIconButton,
    MatIcon,
    LanguageSwitcherComponent,
    FooterContentComponent,
    SourceListComponent,
    ArticleListComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {

  sourceSelected: Subject<Source> = new Subject();

  onSourceSelected(source: Source) {
    console.log('Source selected on SideComponent: ', source.id);
    this.sourceSelected.next(source);
  }
}
