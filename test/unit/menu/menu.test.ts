import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MdcMenu, MdcMenuOpenFrom, MdcMenuModule } from '@angular-mdc/web';

describe('MdcMenu', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdcMenuModule],
      declarations: [
        SimpleTest,
      ]
    });
    TestBed.compileComponents();
  }));

  describe('basic behaviors', () => {
    let testDebugElement: DebugElement;
    let testInstance: MdcMenu;
    let testComponent: SimpleTest;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();

      testDebugElement = fixture.debugElement.query(By.directive(MdcMenu));
      testInstance = testDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('#should have mdc-simple-menu by default', () => {
      expect(testDebugElement.nativeElement.classList)
        .toContain('mdc-simple-menu', 'Expected to have mdc-simple-menu');
    });

    it('#should be closed', () => {
      testInstance.close();
      fixture.detectChanges();
      expect(testInstance.isOpen()).toBe(false);
    });

    it('#should be open', () => {
      testInstance.open();
      fixture.detectChanges();
      expect(testInstance.isOpen()).toBe(true);
    });

    it('#should be open with focus to index 2', () => {
      testInstance.open(2);
      fixture.detectChanges();
      expect(testInstance.getFocusedItemIndex()).toBe(-1);
    });

    it('#should be open after opening prior', () => {
      testInstance.open();
      testInstance.open();
      fixture.detectChanges();
      expect(testInstance.isOpen()).toBe(true);
    });

    it('#should be open from bottom right', () => {
      testComponent.myOpenFrom = 'bottomRight';
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList).toContain('mdc-simple-menu--open-from-bottom-right');
    });

    it('#should still open from top-left', () => {
      testComponent.myOpenFrom = 'topLeft';
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList).toContain('mdc-simple-menu--open-from-top-left');
    });

    it('#should be open from top right', () => {
      testComponent.myOpenFrom = 'topRight';
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList).toContain('mdc-simple-menu--open-from-top-right');
    });

    it('#should be open from bottom left', () => {
      testComponent.myOpenFrom = 'bottomLeft';
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList).toContain('mdc-simple-menu--open-from-bottom-left');
    });

    it('#should have focus', () => {
      expect(document.activeElement).not.toBe(testDebugElement.nativeElement);

      testInstance.focus();
      fixture.detectChanges();

      expect(document.activeElement).toBe(testDebugElement.nativeElement);
      expect(testInstance.isFocused()).toBe(true);
    });

    it('#menu item should be enabled', () => {
      testComponent.isDisabled = false;
      fixture.detectChanges();
      expect(testInstance.options.toArray()[1].disabled).toBe(false);
    });

    it('#menu should have anchor', () => {
      expect(testInstance.hasAnchor()).toBe(true);
    });

    it('#menu should have direction', () => {
      expect(testInstance.isRtl()).toBe(false);
    });

    it('#should handle click event', () => {
      testDebugElement.nativeElement.click();
      fixture.detectChanges();
    });
  });
});

@Component({
  template: `
    <div mdc-menu-anchor>
      <mdc-menu [openFrom]="myOpenFrom" (select)="handleSelect($event)"
      (cancel)="handleCancel($event)" direction='ltr'>
        <mdc-menu-item id="0">Item 1</mdc-menu-item>
        <mdc-menu-item id="1" [disabled]="isDisabled">Item 2</mdc-menu-item>
        <mdc-menu-item id="2">Item 3</mdc-menu-item>
        <mdc-menu-divider></mdc-menu-divider>
        <mdc-menu-item id="3">Item 4</mdc-menu-item>
      </mdc-menu>
    </div>
  `,
})
class SimpleTest {
  myOpenFrom: MdcMenuOpenFrom = 'topLeft';
  isDisabled: boolean = true;
  selectedIndex: number = -1;
  isRtl = 'ltr';

  handleSelect(event: { index: number, item: HTMLElement }) {
    this.selectedIndex = event.index;
  }

  handleCancel(event) { }
}
