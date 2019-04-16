import { async, TestBed } from '@angular/core/testing';
import { LazyModule } from './lazy.module';

describe('LazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LazyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LazyModule).toBeDefined();
  });
});
