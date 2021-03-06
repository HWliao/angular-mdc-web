import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  MdcToolbarModule,
  MdcToolbar,
} from '@angular-mdc/web';

describe('MdcToolbar', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdcToolbarModule,
      ],
      declarations: [
        SimpleTest,
      ]
    });
    TestBed.compileComponents();
  }));

  describe('basic behaviors', () => {
    let testDebugElement: DebugElement;
    let testNativeElement: HTMLElement;
    let testInstance: MdcToolbar;
    let testComponent: SimpleTest;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();

      testDebugElement = fixture.debugElement.query(By.directive(MdcToolbar));
      testNativeElement = testDebugElement.nativeElement;
      testInstance = testDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('#should have mdc-toolbar by default', () => {
      expect(testDebugElement.nativeElement.classList).toContain('mdc-toolbar');
    });

    it('#should apply mdc-toolbar--fixed class based on property', () => {
      testComponent.isFixed = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-toolbar--fixed')).toBe(true);
    });

    it('#should apply mdc-toolbar--waterfall class based on property', () => {
      testComponent.isWaterfall = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-toolbar--waterfall')).toBe(true);
    });

    it('#should apply mdc-toolbar--flexible class based on property', () => {
      testComponent.isFlexible = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-toolbar--flexible')).toBe(true);
    });

    it('#should apply mdc-toolbar--fixed-lastrow-only class based on property', () => {
      testComponent.isFixedLastRow = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-toolbar--fixed-lastrow-only')).toBe(true);
    });

    it('#should apply mdc-toolbar--flexible-default-behavior class based on property', () => {
      testComponent.isFlexible = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-toolbar--flexible-default-behavior')).toBe(true);
    });

    it('#should have updateAdjustElementStyles()', () => {
      testInstance.updateAdjustElementStyles();
      fixture.detectChanges();
    });
  });
});

@Component({
  template: `
    <mdc-toolbar
      [flexible]="isFlexible"
      [fixed]="isFixed"
      [waterfall]="isWaterfall"
      [fixedLastrow]="isFixedLastRow"
      [adjustBodyMargin]="isAdjustBodyMargin"
      [fixedAdjustElement]="testbody"
      (change)="handleToolbarChange($event);">
      <mdc-toolbar-row>
        <mdc-toolbar-section [alignStart]="true">
          <a href="#" mdc-toolbar-menu-icon material-icon>menu</a>
          <mdc-toolbar-title>Title</mdc-toolbar-title>
        </mdc-toolbar-section>
      </mdc-toolbar-row>
      <mdc-toolbar-row>
        <mdc-toolbar-section [alignEnd]="true">
          <a href="#/toolbar-demo" mdc-toolbar-icon material-icon>file_download</a>
          <a href="#/toolbar-demo" mdc-toolbar-icon material-icon>print</a>
          <a href="#/toolbar-demo" mdc-toolbar-icon material-icon>bookmark</a>
        </mdc-toolbar-section>
      </mdc-toolbar-row>
    </mdc-toolbar>
    <div #testbody></div>
    <div mdc-toolbar-fixed-adjust></div>
  `,
})
class SimpleTest {
  isFixed = false;
  isFlexible = false;
  isWaterfall = false;
  isFixedLastRow = false;
  isAdjustBodyMargin = true;

  handleToolbarChange(evt: number) {
    // change event
  }
}
