export interface Quote {
  storedSymbol: string;
  quoteIntro?: QuoteIntro;
  quoteData?: QuoteData;
}

export interface QuoteIntro {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

export interface QuoteData {
  c: number;
  d: number;
  dp:number;
  h: number;
  l: number;
  o: number;
  pc:number;
  t: number;
}