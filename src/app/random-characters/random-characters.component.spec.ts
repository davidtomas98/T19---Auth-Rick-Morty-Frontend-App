import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCharactersComponent } from './random-characters.component';

describe('RandomCharactersComponent', () => {
  let component: RandomCharactersComponent;
  let fixture: ComponentFixture<RandomCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCharactersComponent]
    });
    fixture = TestBed.createComponent(RandomCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
