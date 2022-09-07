import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundapantallaComponent } from './segundapantalla.component';

describe('SegundapantallaComponent', () => {
  let component: SegundapantallaComponent;
  let fixture: ComponentFixture<SegundapantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundapantallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundapantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
