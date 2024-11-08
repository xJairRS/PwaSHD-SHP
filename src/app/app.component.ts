import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    // Verificar si estamos en un entorno de navegador antes de ejecutar
    if (this.isBrowser()) {
      this.registrarServiceWorker();
      this.verificarActualizaciones();
      this.configurarPushNotifications();
    }
  }

  // Método para verificar si estamos en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof navigator !== 'undefined';
  }

  private registrarServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/ngsw-worker.js')
        .then(reg => console.log('Service Worker registrado:', reg))
        .catch(err => console.error('Error al registrar el Service Worker:', err));
    }
  }

  private verificarActualizaciones() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
        .subscribe(() => {
          if (confirm('Hay una nueva versión disponible. ¿Desea cargarla?')) {
            window.location.reload();
          }
        });
    }
  }

  private configurarPushNotifications() {
    if ('PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array('YOUR_PUBLIC_VAPID_KEY')
        }).then(subscription => {
          console.log('Suscrito a notificaciones push:', subscription);
        }).catch(err => {
          console.error('Error al suscribirse a notificaciones push:', err);
        });
      });
    }
  }

  private urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}
