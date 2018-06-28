import { TestBed, inject } from '@angular/core/testing';

import { KpnApiService } from './kpn-api.service';

describe('KpnApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpnApiService]
    });
  });

  it('should be created', inject([KpnApiService], (service: KpnApiService) => {
    expect(service).toBeTruthy();
  }));
});
