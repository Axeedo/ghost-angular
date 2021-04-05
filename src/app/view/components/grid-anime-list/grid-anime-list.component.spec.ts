import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAnimeListComponent } from './grid-anime-list.component';

describe('GridAnimeListComponent', () => {
  let component: GridAnimeListComponent;
  let fixture: ComponentFixture<GridAnimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAnimeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAnimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
