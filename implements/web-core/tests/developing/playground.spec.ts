import { describe, it, expect } from 'vitest';
import card from '../../src/demo/d-sd04_004';

describe('developing playground', () => {
  it('should ok', () => {
    console.log(card.toJsonString(true));
    expect(card).toBeTruthy();
  });
});
