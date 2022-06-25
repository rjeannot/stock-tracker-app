export interface SentimentListResponse {
  data: Sentiment[];
  symbol: string;
}

export interface Sentiment {
  change: number;
  month: number;
  mspr: number;
  symbol: string;
  year: number;
}