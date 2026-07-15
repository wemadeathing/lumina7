import { animate } from 'motion/mini';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const easeOut = [0.22, 1, 0.36, 1] as const;

const revealSelector = 'main [data-motion-reveal]';
let lastModalTrigger: HTMLElement | null = null;

function setupScrollReveals() {
  if (reducedMotion || !('IntersectionObserver' in window)) return;

  const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
  const visibleElements = elements.filter((element) => {
    if (element.dataset.motionRevealBound === 'true') return false;

    const rect = element.getBoundingClientRect();
    return rect.top > window.innerHeight * 0.35;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        const delay = Number(element.dataset.motionDelay || 0);
        animate(
          element,
          { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          { duration: 0.48, delay, easing: easeOut }
        );
        observer.unobserve(element);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.18 }
  );

  visibleElements.forEach((element, index) => {
    element.dataset.motionRevealBound = 'true';
    element.style.opacity = '0';
    element.style.transform = 'translate3d(0, 10px, 0)';
    element.style.willChange = 'opacity, transform';
    element.dataset.motionDelay = String(Math.min(index * 0.018, 0.1));
    observer.observe(element);
  });
}

function setupImageModal() {
  const closeModalBtn = document.getElementById('closeModal') as HTMLButtonElement | null;

  if (closeModalBtn && closeModalBtn.dataset.modalBound !== 'true') {
    closeModalBtn.dataset.modalBound = 'true';
    closeModalBtn.addEventListener('click', closeImageModal);
  }
}

function openImageModal(imageSrc: string) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage') as HTMLImageElement | null;
  const closeModalBtn = document.getElementById('closeModal') as HTMLButtonElement | null;

  if (!modal || !modalImage) return;

  modalImage.src = imageSrc;
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.querySelectorAll<HTMLElement>('#main-header, [data-event="whatsapp_float_click"]').forEach((element) => {
    element.style.setProperty('display', 'none');
  });
  document.body.style.overflow = 'hidden';
  closeModalBtn?.focus({ preventScroll: true });
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;

  modal.setAttribute('aria-hidden', 'true');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.querySelectorAll<HTMLElement>('#main-header, [data-event="whatsapp_float_click"]').forEach((element) => {
    element.style.removeProperty('display');
  });
  document.body.style.overflow = '';
  lastModalTrigger?.focus({ preventScroll: true });
  lastModalTrigger = null;
}

function initMicroInteractions() {
  setupScrollReveals();
  setupImageModal();
}

function bindGlobalModalEvents() {
  if (document.documentElement.dataset.microInteractionsBound === 'true') return;
  document.documentElement.dataset.microInteractionsBound = 'true';

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    if (target.closest('#closeModal')) {
      event.preventDefault();
      closeImageModal();
      return;
    }

    const imageTrigger = target.closest<HTMLElement>('[data-modal-image]');
    if (imageTrigger) {
      const imageSrc = imageTrigger.getAttribute('data-modal-image');
      if (!imageSrc) return;

      event.preventDefault();
      lastModalTrigger = imageTrigger;
      openImageModal(imageSrc);
      return;
    }

    const modal = document.getElementById('imageModal');
    if (modal && event.target === modal) closeImageModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeImageModal();
  });
}

export function startMicroInteractions() {
  bindGlobalModalEvents();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMicroInteractions, { once: true });
  } else {
    initMicroInteractions();
  }

  document.addEventListener('astro:page-load', initMicroInteractions);
}
