import { createGlobalStyle } from 'styled-components';

export const isDesktopSmall = '@media (min-width: 940px)';
export const isDesktopMedium = '@media (min-width: 1280px)';
export const isDesktopLarge = '@media (min-width: 1600px)';

export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li,
  input, textarea, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background-color: transparent;
  }

  input[type=password]::-ms-reveal,
  input[type=password]::-ms-clear
  {
    display: none;
  }

  ol, ul {
    list-style: none;
  }

  s {
    text-decoration: none;
  }

  a {
    display: inline;
    text-decoration: none;
    font-size: inherit;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  b {
    font-weight: bold;
  }

  body {
    background: #E0E0E0;
  }
  
  html {
    font-family: 'Manrope',sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    
    ${isDesktopSmall} {
      padding: 40px 140px;
    }
  }
`;

export const ToastGlobal = createGlobalStyle`
	.Toastify {
		z-index: 99999;
	}

	.Toastify__toast {
		padding: 16px;
	}

	.Toastify__toast-container--top-right {
		right: 40px;
		top: 40px;
		max-width: 440px;
		width: auto;
		min-width: 300px;
	}

	.toast-error {
    border-radius: 10px;
    background: white;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.10);

		.Toastify__toast-body {
			font-weight: 400;
			font-size: 14px;
			line-height: 22px;
			color: black;
		}

		.Toastify__toast-container--top-right {
			right: 40px;
			top: 40px;
		}

		.Toastify__toast-icon {
			margin-inline-end: 10px;
			width: 50px;
			flex-shrink: 0;
			display: flex;
			background:  url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAzCAYAAADVY1sUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKdSURBVHgB3Zo9VhsxFIUvZAFxunR5Zbp4B6hMF3cp0Q5gB3ZW4OyAkxVAylSYFSRZQSYdHewA3rUkxvaBM3/SIM13zj02Y2bmXelp9DdHiM9MZfznW/8Z+K+qVH9U94jIEYbDQBeqE9QGKtTB7gYsXnN/fOP1E5GNdcGo1qp/qmvVmepDh/NFZVWXqgfVhT82GixNBn6nWmI/dfoicKZYKMkNMeDviGvgOSycoRUSIP7iTINUBg7vd+HvKYjEwl/wDONzDpcBCwzEwpmY4/WY+xhO0ROLyFU7AEFPMyyFO+RhIiBwMbXODp5A94PzMgEGHbKET4sl8oWd8HXTP1k4x7nzGw3tJZfG3YSBay9PfdqbnR+t//yB/KlUn1XvVTeHP5ZSGwEDVyt7WLRoQBnCmM3uAY6hevecDRikGxlYHFQA5wMpBoOCeq6RAsa8bfTHcCW2wSvO0AbAmDkTndMIp6gblAuNfKKRuf+jVP6qDI0I3OpGqTyllsB1MKWybds0MkOZDT1QqeQYE2FSRip0W1jLjW3TCDXyDuUiqopGth0KykVUFecjHNN/VP1CGnj9DVzHlYKvqlt+MShzCB9g7Bxm1SNIlAdj5uh6+9QKI8gviI8g7TCeS1ZX/BKeWt9Qz9lLgpPBq8ODTC+DchC8sHTFRbmSGj3T9dnpeWj0BvkjaFhItHCreLnTamWe6bVGvqzQ8ikocI4N8iPsnknbEyaxPxKwmMCOVcBiAnuIAeYlq/Qc48N7Rt09E4z0VoKHfdolEqb2EpGq+QVoYAWXAWskHpEL6rcSThGnxHYNsB8btU0KnCEO08O2hHQ8n29TMHAWCmvgBD1J9b4W5zcV9lcwZ14sbUHk97ViGDmEwXIxQ7BfQ/c7ukHk1c1HklmbqYKq0toAAAAASUVORK5CYII=');
			height: 51px;

			svg {
				display: none;
			}
		}

		.Toastify__toast {
			padding: 16px;
		}

		> button {
			align-self: center;
			margin: 4px 0 0 6px;

			> svg {
				fill: #4F5660;
			}
		}
	}
`;
