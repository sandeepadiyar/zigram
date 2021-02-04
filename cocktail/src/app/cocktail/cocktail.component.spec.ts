import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CocktailComponent } from './cocktail.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CocktailComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CocktailComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cocktails'`, () => {
    const fixture = TestBed.createComponent(CocktailComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cocktails');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CocktailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('cocktails app is running!');
  });
});
