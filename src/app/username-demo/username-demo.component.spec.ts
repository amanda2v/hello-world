import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameDemoComponent } from './username-demo.component';

describe('UsernameDemoComponent', () => {
  let component: UsernameDemoComponent;
  let fixture: ComponentFixture<UsernameDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
