'use client';

import { useEffect, useState } from 'react';
import type { ManagedProduct } from './content-policy';
import SiteHeader from '../ui/site-header';
import { useQuote } from '../quote/use-quote';
import QuoteDialog from '../quote/quote-dialog';
import { openQuoteEvent } from '../quote/open-quote';

export default function ProductPageHeader({
  products,
}: {
  products: ManagedProduct[];
}) {
  const { ids, setIds } = useQuote(products);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const showQuote = () => setQuoteOpen(true);
    window.addEventListener(openQuoteEvent, showQuote);
    return () => window.removeEventListener(openQuoteEvent, showQuote);
  }, []);

  return (
    <>
      <SiteHeader
        quoteCount={ids.length}
        activeSection="catalogo"
        onQuote={() => setQuoteOpen(true)}
      />
      <QuoteDialog
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        products={products}
        quote={ids}
        setQuote={setIds}
      />
    </>
  );
}
