import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UnCamelCasePipe } from './un-camel-case.pipe';

describe('Pipe: Default', () => {
    let pipe: UnCamelCasePipe;

    beforeEach(() => {
        pipe = new UnCamelCasePipe();
    });

    it('should capitalize separate the word based on Camel Case', () => {
        const sentence = 'capitalizeThisSentence';
        expect(pipe.transform(sentence)).toBe('Capitalize This Sentence');
    });
});
