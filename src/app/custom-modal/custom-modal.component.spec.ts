/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CustomModalComponent } from './custom-modal.component';

describe('Component: CustomModal', () => {
  it('should create an instance', () => {
    let component = new CustomModalComponent();
    expect(component).toBeTruthy();
  });
});
