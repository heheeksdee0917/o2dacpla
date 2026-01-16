import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';
import LazyImage from '../components/LazyImage';
import React, { useState, useEffect, useRef } from 'react';
import { useInfiniteScroll } from '../components/ScrollLoad'; // ← Add this import

export default function News() {
  const [fadeIn, setFadeIn] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // ← Add infinite scroll hook
  const {
    displayedItems: displayedNews,
    isLoading,
    hasMore,
    observerTarget,
  } = useInfiniteScroll({
    items: newsItems,
    initialLoad: 9,  // Load 9 items initially (3 rows of 3 on desktop)
    loadMoreCount: 6, // Load 6 more items when scrolling
    enabled: true,    // Always enabled for news page
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div data-theme="light" className="bg-white min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-32">
          
          {/* Header */}
          <div 
            ref={setRef('header')}
            data-section="header"
            className={`mb-24 text-center transition-all duration-1000 ease-out ${
              visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black/90 mb-4">News & Updates</h1>
            <p className="text-base font-light text-black/50 max-w-2xl mx-auto leading-relaxed">
              Recent developments, project updates, and insights from the studio
            </p>
          </div>

          {/* News Grid - Changed from newsItems to displayedNews */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedNews.map((item, index) => (
              <Link
                key={item.id}
                to={`/news/${item.slug}`}
                ref={index === 0 ? setRef('news') : undefined}
                data-section={index === 0 ? 'news' : undefined}
                className={`group block transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 ${
                  visibleSections.news ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card Container */}
                <div className="bg-white border border-black/5 overflow-hidden transition-all duration-300 hover:border-black/20 hover:shadow-lg">
                  
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-light text-black/40">
                        {formatDate(item.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-light mb-3 relative inline-block">
                      {item.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm font-light text-black/60 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-center items-center py-8 mt-8">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}

          {/* Observer target for infinite scroll */}
          <div ref={observerTarget} className="h-4" />

          {/* End message */}
          {!hasMore && newsItems.length > 0 && (
            <div className="text-center py-12 mt-8">
              <p className="text-sm font-light text-black/40">You've reached the end</p>
            </div>
          )}

          {/* Empty State */}
          {newsItems.length === 0 && (
            <div className="text-center py-32">
              <p className="text-xl font-light text-black/30">No news to display</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}