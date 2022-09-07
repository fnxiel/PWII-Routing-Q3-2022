import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerapantallaComponent } from './primerapantalla.component';

describe('PrimerapantallaComponent', () => {
  let component: PrimerapantallaComponent;
  let fixture: ComponentFixture<PrimerapantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerapantallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerapantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
