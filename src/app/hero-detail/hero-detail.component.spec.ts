import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HeroService} from '../hero.service';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {Location} from '@angular/common';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {paramMap: convertToParamMap({id: 11})}}
        },
        Location
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

});
