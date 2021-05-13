import {HeroService} from './hero.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';


describe('HeroService', () => {
  let heroService: HeroService;
  let httpMock: HttpTestingController;

  const hero = {id: 11, name: 'Dr Nice'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    heroService = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });


  it('getHeroNo404 should return undefined when id does not exist', async () => {
    const result = undefined;
    heroService.getHeroNo404(-1).subscribe(response => {
      expect(response).toEqual(result);
    });

    const request = httpMock.expectOne('api/heroes/?id=-1');
    expect(request.request.method).toBe('GET');
    request.event(undefined);
  });

  it('getHero(11) should return hero with id 11', async () => {
    heroService.getHero(hero.id).subscribe(response => {
      expect(response).toEqual(hero);
    });

    const request = httpMock.expectOne('api/heroes/11');
    expect(request.request.method).toBe('GET');
    request.flush(hero);
  });

  it('addHero({id: 22, name: \'Hero test\'}) adds a hero with id 12 and name Hero test', async () => {
    const hero22 = {id: 22, name: 'Hero test'};
    heroService.addHero(hero22).subscribe(res => {
      expect(res).toEqual(hero22);
    });

    const request = httpMock.expectOne('api/heroes');
    expect(request.request.method).toBe('POST');
    request.flush(hero22);
  });

  it('deleteHero(11) deletes hero with id 11', async () => {

    heroService.deleteHero(hero.id).subscribe(res => {
      expect(res).toEqual(hero);
    });

    const req = httpMock.expectOne('api/heroes/11');
    expect(req.request.method).toEqual('DELETE');
    req.flush(hero);
    httpMock.verify();
  });

  it('updateHero(11) changes data', async () => {
    const hero11Updated = {id: 11, name: 'Dr Nice updated'};
    heroService.updateHero(hero11Updated).subscribe(res => {
      expect(res).toEqual(hero11Updated);
    });

    const req = httpMock.expectOne('api/heroes');
    expect(req.request.method).toEqual('PUT');
    req.flush(hero11Updated);
    httpMock.verify();
  });
});
