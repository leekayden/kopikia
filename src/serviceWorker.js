import { Workbox } from 'workbox-window';

export function register() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');
    wb.register()
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((registrationError) => {
        console.log('Service Worker registration failed:', registrationError);
      });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister()
        .then(() => {
          console.log('Service Worker unregistered');
        })
        .catch((unregistrationError) => {
          console.log('Service Worker unregistration failed:', unregistrationError);
        });
    });
  }
}
