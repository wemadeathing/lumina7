export function initProcessTimelines() {
  const sections = document.querySelectorAll('[data-process-timeline]');

  sections.forEach((section) => {
    if (section.getAttribute('data-initialized') === 'true') return;
    section.setAttribute('data-initialized', 'true');

    const steps = section.querySelectorAll('[data-process-step]');
    const markers = section.querySelectorAll('[data-process-marker]');

    if (!steps.length || markers.length !== steps.length) return;

    let current = 0;
    let rafId = 0;

    const setActive = (index: number) => {
      const total = steps.length;
      current = ((index % total) + total) % total;

      steps.forEach((step, stepIndex) => {
        const isActive = stepIndex === current;
        step.classList.toggle('opacity-100', isActive);
        step.classList.toggle('opacity-35', !isActive);

        const title = step.querySelector('.process-step-title');
        if (title) {
          title.classList.toggle('text-primary', isActive);
          title.classList.toggle('text-secondary', !isActive);
        }
      });

      markers.forEach((marker, markerIndex) => {
        const isActive = markerIndex === current;
        marker.classList.toggle('ring-1', isActive);
        marker.classList.toggle('ring-white/80', isActive);
        marker.classList.toggle('border-white/80', isActive);
        marker.classList.toggle('border-primary', !isActive);

        const dot = marker.querySelector('.process-marker-dot');
        if (dot) {
          dot.classList.toggle('opacity-100', isActive);
          dot.classList.toggle('opacity-0', !isActive);
        }
      });
    };

    const getScrollIndex = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const triggerLine = viewportHeight * 0.35;
      const rawProgress = (triggerLine - rect.top) / Math.max(1, rect.height);
      const progress = Math.min(1, Math.max(0, rawProgress));
      return Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length)));
    };

    const updateFromScroll = () => {
      const index = getScrollIndex();
      if (index !== current) setActive(index);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateFromScroll();
        rafId = 0;
      });
    };

    markers.forEach((marker) => {
      marker.addEventListener('click', () => {
        const index = Number(marker.getAttribute('data-index') || '0');
        setActive(index);
      });
    });

    setActive(0);
    updateFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  });
}
