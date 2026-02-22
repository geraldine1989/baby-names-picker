import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesList } from './names-list';

describe('NamesList', () => {
  let component: NamesList;
  let fixture: ComponentFixture<NamesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
