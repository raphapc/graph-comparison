import { BrowserUsage } from "@visx/mock-data/lib/mocks/browserUsage";

export type BrowserNames = keyof BrowserUsage;

export interface BrowserInfo {
  label: BrowserNames;
  usage: number;
}
