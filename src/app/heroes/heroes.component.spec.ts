import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HeroService} from '../hero.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should have h2 wit text `My Heroes`', () => {
    const element: HTMLElement = fixture.nativeElement;
    const h2 = element.querySelector('h2');
    expect(h2.textContent).toContain('My Heroes');
  });

  it('Click on add button invokes heroService.add', () => {
    spyOn(component, 'add');
    const element: HTMLElement = fixture.nativeElement;
    const button: HTMLButtonElement = element.querySelector('.add-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.add).toHaveBeenCalled();
  });
});
