import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostsService, Post } from './services/posts.service';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss'],
  imports: [FooterComponent, MainComponent, HeaderComponent]
})
export class AppComponent implements OnInit {
    public title = 'frontend';
  @ViewChild(MainComponent) main!: MainComponent;
  constructor(private posts: PostsService) {}



 
ngOnInit() {
  setTimeout(() => {
    this.fetch();  // Ensures ViewChild is ready in most cases
  });
}


  /** Triggered by header */
  onSearch(term: string) {
    this.fetch(term);
  }

  private fetch(q?: string) {
    this.posts.fetch(q).subscribe(data => {
      if (this.main) {
        this.main.updateData(data);
      } else {
        console.warn('main not available');
      }
    });
  }
}