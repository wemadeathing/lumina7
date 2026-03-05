export function initTestimonials() {
  const testimonialSections = document.querySelectorAll('[data-testimonials]');

  testimonialSections.forEach((section) => {
    if (section.getAttribute('data-initialized') === 'true') return;
    section.setAttribute('data-initialized', 'true');

    const slides = section.querySelectorAll('[data-testimonial-slide]');
    const steps = section.querySelectorAll('[data-testimonial-step]');
    const progressBar = section.querySelector('[data-testimonial-progress]');
    if (!slides.length) return;

    let current = 0;
    let rafId: number | undefined;
    let startedAt = 0;
    const autoplayMs = 5600;

    const clearProgress = () => {
      if (progressBar instanceof HTMLElement) progressBar.style.width = '0%';
    };

    const setActive = (index: number, resetProgress = true) => {
      const total = slides.length;
      current = ((index % total) + total) % total;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === current;
        slide.classList.toggle('opacity-100', isActive);
        slide.classList.toggle('opacity-0', !isActive);
        slide.classList.toggle('pointer-events-none', !isActive);
        slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });

      steps.forEach((step, stepIndex) => {
        const isActive = stepIndex === current;
        step.setAttribute('aria-current', isActive ? 'true' : 'false');
        const label = step.querySelector('span');
        label?.classList.toggle('text-primary', isActive);
        label?.classList.toggle('text-tertiary', !isActive);
      });

      if (resetProgress) clearProgress();
    };

    const stop = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };

    const run = (timestamp: number) => {
      if (!startedAt) startedAt = timestamp;
      const progress = Math.min((timestamp - startedAt) / autoplayMs, 1);
      if (progressBar instanceof HTMLElement) progressBar.style.width = `${progress * 100}%`;

      if (progress >= 1) {
        startedAt = 0;
        setActive(current + 1);
        rafId = window.requestAnimationFrame(run);
        return;
      }

      rafId = window.requestAnimationFrame(run);
    };

    const start = () => {
      stop();
      startedAt = 0;
      rafId = window.requestAnimationFrame(run);
    };

    steps.forEach((step) => {
      step.addEventListener('click', () => {
        const targetIndex = Number(step.getAttribute('data-index') || '0');
        setActive(targetIndex);
        start();
      });
    });

    section.addEventListener('mouseenter', stop);
    section.addEventListener('mouseleave', start);
    section.addEventListener('focusin', stop);
    section.addEventListener('focusout', (event) => {
      const nextTarget = event instanceof FocusEvent ? event.relatedTarget : null;
      if (nextTarget instanceof Node && section.contains(nextTarget)) return;
      start();
    });

    setActive(0);
    start();
  });
}
