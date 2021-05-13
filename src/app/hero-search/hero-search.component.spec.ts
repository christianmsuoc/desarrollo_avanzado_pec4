import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeroSearchComponent } from './hero-search.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HeroService} from '../hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

});
