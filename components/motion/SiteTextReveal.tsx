'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '@/lib/motion';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

/** Applies the site's word-by-word scroll darkening to all main page paragraphs. */
export default function SiteTextReveal() {
  useEffect(() => {
    if (isReducedMotion()) return;

    const root = document.getElementById('main-content');
    if (!root) return;

    const contexts = new Map<HTMLParagraphElement, gsap.Context>();

    const reveal = (paragraph: HTMLParagraphElement) => {
      if (paragraph.closest('[data-no-text-reveal]')) return;
      if (paragraph.dataset.textReveal === 'true' && paragraph.querySelector('.site-text-reveal-word')) return;

      const words: HTMLSpanElement[] = [];
      const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.textContent?.trim()) return NodeFilter.FILTER_REJECT;
          if (node.parentElement?.closest('.site-text-reveal-word,script,style,button')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      const textNodes: Text[] = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

      textNodes.forEach((node) => {
        const parts = node.textContent?.match(/\s+|[^\s]+/g) ?? [];
        const fragment = document.createDocumentFragment();
        parts.forEach((part) => {
          if (/^\s+$/.test(part)) {
            fragment.append(document.createTextNode(part));
          } else {
            const span = document.createElement('span');
            span.className = 'site-text-reveal-word';
            span.textContent = part;
            fragment.append(span);
            words.push(span);
          }
        });
        node.replaceWith(fragment);
      });

      paragraph.dataset.textReveal = 'true';
      if (!words.length) return;

      const targetColor = getComputedStyle(paragraph).color;

      const context = gsap.context(() => {
        gsap.fromTo(words, { color: '#62676D' }, {
          color: targetColor,
          ease: 'none',
          stagger: 0.015,
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 82%',
            end: 'bottom 48%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }, paragraph);
      contexts.set(paragraph, context);
    };

    const scan = () => root.querySelectorAll<HTMLParagraphElement>('p').forEach(reveal);
    scan();
    const observer = new MutationObserver(() => scan());
    observer.observe(root, { childList: true, subtree: true, characterData: true });

    return () => {
      observer.disconnect();
      contexts.forEach((context) => context.revert());
      contexts.clear();
      root.querySelectorAll<HTMLParagraphElement>('[data-text-reveal="true"]').forEach((paragraph) => {
        paragraph.querySelectorAll('.site-text-reveal-word').forEach((span) => span.replaceWith(document.createTextNode(span.textContent ?? '')));
        paragraph.normalize();
        delete paragraph.dataset.textReveal;
      });
    };
  }, []);

  return null;
}
