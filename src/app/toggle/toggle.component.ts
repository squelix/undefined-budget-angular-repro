import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  styles: [
    `
      :host {
        --bright-blue: oklch(51.01% 0.274 263.83);
        --electric-violet: oklch(53.18% 0.28 296.97);
        --french-violet: oklch(47.66% 0.246 305.88);
        --vivid-pink: oklch(69.02% 0.277 332.77);
        --hot-red: oklch(61.42% 0.238 15.34);
        --orange-red: oklch(63.32% 0.24 31.68);

        --gray-900: oklch(19.37% 0.006 300.98);
        --gray-700: oklch(36.98% 0.014 302.71);
        --gray-400: oklch(70.9% 0.015 304.04);

        --red-to-pink-to-purple-vertical-gradient: linear-gradient(
          180deg,
          var(--orange-red) 0%,
          var(--vivid-pink) 50%,
          var(--electric-violet) 100%
        );

        --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
          90deg,
          var(--orange-red) 0%,
          var(--vivid-pink) 50%,
          var(--electric-violet) 100%
        );

        --pill-accent: var(--bright-blue);

        font-family:
          'Inter',
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Helvetica,
          Arial,
          sans-serif,
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol';
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1 {
        font-size: 3.125rem;
        color: var(--gray-900);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
        margin: 0;
        font-family:
          'Inter Tight',
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Helvetica,
          Arial,
          sans-serif,
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol';
      }

      p {
        margin: 0;
        color: var(--gray-700);
      }

      main {
        width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        box-sizing: inherit;
        position: relative;
      }

      .angular-logo {
        max-width: 9.2rem;
      }

      .content {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 700px;
        margin-bottom: 3rem;
      }

      .content h1 {
        margin-top: 1.75rem;
      }

      .content p {
        margin-top: 1.5rem;
      }

      .divider {
        width: 1px;
        background: var(--red-to-pink-to-purple-vertical-gradient);
        margin-inline: 0.5rem;
      }

      .pill-group {
        display: flex;
        flex-direction: column;
        align-items: start;
        flex-wrap: wrap;
        gap: 1.25rem;
      }

      .pill {
        display: flex;
        align-items: center;
        --pill-accent: var(--bright-blue);
        background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
        color: var(--pill-accent);
        padding-inline: 0.75rem;
        padding-block: 0.375rem;
        border-radius: 2.75rem;
        border: 0;
        transition: background 0.3s ease;
        font-family: var(--inter-font);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.4rem;
        letter-spacing: -0.00875rem;
        text-decoration: none;
      }

      .pill:hover {
        background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
      }

      .pill-group .pill:nth-child(6n + 1) {
        --pill-accent: var(--bright-blue);
      }
      .pill-group .pill:nth-child(6n + 2) {
        --pill-accent: var(--french-violet);
      }
      .pill-group .pill:nth-child(6n + 3),
      .pill-group .pill:nth-child(6n + 4),
      .pill-group .pill:nth-child(6n + 5) {
        --pill-accent: var(--hot-red);
      }

      .pill-group svg {
        margin-inline-start: 0.25rem;
      }

      .social-links {
        display: flex;
        align-items: center;
        gap: 0.73rem;
        margin-top: 1.5rem;
      }

      .social-links path {
        transition: fill 0.3s ease;
        fill: var(--gray-400);
      }

      .social-links a:hover svg path {
        fill: var(--gray-900);
      }

      @media screen and (max-width: 650px) {
        .content {
          flex-direction: column;
          width: max-content;
        }

        .divider {
          height: 1px;
          width: 100%;
          background: var(--red-to-pink-to-purple-horizontal-gradient);
          margin-block: 1.5rem;
        }
      }
    `,
  ],
  template: `
    <label class="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        (change)="clickToggle.emit($event)" />
      <div
        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        ><ng-content></ng-content
      ></span>
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickToggle = output<any>();
}
