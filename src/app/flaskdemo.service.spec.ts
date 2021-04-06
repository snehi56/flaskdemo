import { TestBed } from '@angular/core/testing';

import { FlaskdemoService } from './flaskdemo.service';

describe('FlaskdemoService', () => {
  let service: FlaskdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaskdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
