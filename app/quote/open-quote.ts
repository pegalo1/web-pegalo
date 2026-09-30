export const openQuoteEvent = 'pegalo:open-quote';

export function openQuote() {
  window.dispatchEvent(new Event(openQuoteEvent));
}
