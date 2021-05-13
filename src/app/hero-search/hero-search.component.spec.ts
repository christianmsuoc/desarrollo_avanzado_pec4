import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import {HeroSearchComponent} from './hero-search.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HeroService} from '../hero.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      imports: [HttpClientTestingModule],
      providers: [HeroService],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('Search terms value change on input change', () => {
    spyOn(component.searchTermsP, 'next');
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'Narco';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.searchTermsP.next).toHaveBeenCalled();
  });


  it('search box text is Hero Search', () => {
    const element: HTMLElement = fixture.nativeElement;
    const label = element.querySelector('label');
    expect(label.textContent).toContain('Hero Search');
  });

  it('on search input search is invoked on input', () => {
    spyOn(component, 'search');
    const element: HTMLElement = fixture.nativeElement;
    const input = element.querySelector('#search-box');
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.search).toHaveBeenCalled();
  });

});
