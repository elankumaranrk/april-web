/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AprilWebService } from './april-web.service';

describe('AprilWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AprilWebService]
    });
  });

  it('should ...', inject([AprilWebService], (service: AprilWebService) => {
    expect(service).toBeTruthy();
  }));
});
