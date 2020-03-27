import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { presidents } from 'src/app/data/presidents';
import { map } from 'rxjs/operators';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;

  list = presidents;
  private readonly SHRINK_TOP_SCROLL_POSITION = 64;
  shrinkToolbar = false;
  scrollingSubscription: any;
  scrollTop: any;
  width: number;
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) {}


  ngOnInit() {
    this.scrollDispatcher.scrolled()
      .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
      .subscribe(scrollTop => this.ngZone.run(() => this.setScroll(scrollTop)));
  }

  ngAfterViewInit() {
    if(this.wrapper) {
      this.width = this.wrapper.nativeElement.clientWidth;
    }
  }

  getScrollPosition(event) {
    if (event) {
      return event.getElementRef().nativeElement.scrollTop;
    } else {
      return window.pageYOffset;
    }
  }
  setScroll(scrollTop){
    this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false;
    this.scrollTop = scrollTop;
  }

  onScroll(event) {
    const scrollTop = event.target.scrollTop
    this.setScroll(scrollTop);
  }

}
