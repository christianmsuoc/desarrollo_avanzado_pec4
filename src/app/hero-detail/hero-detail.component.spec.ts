import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [
        HeroService,
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

  it('goBack is called when button is pressed', () => {
    component.hero = {id: 11, name: 'Prueba'};
    fixture.detectChanges();
    spyOn(component, 'goBack');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('#go-back-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.goBack).toHaveBeenCalled();
  });

  it('save is called when button is pressed', () => {
    component.hero = {id: 11, name: 'Prueba'};
    fixture.detectChanges();
    spyOn(component, 'save');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('#save-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.save).toHaveBeenCalled();
  });

  it('Hero name is correctly setted onInit', () => {
    const hero = {id: 11, name: 'Prueba'};
    component.hero = hero;
    fixture.detectChanges();
    expect(component.hero.name).toEqual(hero.name);
  });

});
