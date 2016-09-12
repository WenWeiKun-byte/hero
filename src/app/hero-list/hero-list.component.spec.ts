/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HeroListComponent } from './hero-list.component';

describe('Component: HeroList', () => {
  it('should create an instance', () => {
    let component = new HeroListComponent();
    expect(component).toBeTruthy();
  });
});
