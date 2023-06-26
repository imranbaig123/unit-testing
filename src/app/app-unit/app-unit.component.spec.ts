import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppUnitComponent } from './app-unit.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppUnitComponent', () => {
  let component: AppUnitComponent;
  let fixture: ComponentFixture<AppUnitComponent>;
  let de: DebugElement;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [AppUnitComponent]
    })
    .compileComponents();   //compiles template and css
    fixture = TestBed.createComponent(AppUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppUnitComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  //truthy means (something == true)
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have a H1 tag of `Alert`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });
});
