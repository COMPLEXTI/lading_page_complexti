export function initSeoAndAnalytics() {
  const gscVerification = import.meta.env.VITE_GSC_VERIFICATION;
  if (!gscVerification) return;

  const meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = gscVerification;
  document.head.appendChild(meta);
}
