import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'google-sans': 'var(--font-google-sans)',
				'roboto': 'var(--font-roboto)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					variant: 'hsl(var(--surface-variant))',
					container: {
						DEFAULT: 'hsl(var(--surface-container))',
						high: 'hsl(var(--surface-container-high))',
						highest: 'hsl(var(--surface-container-highest))',
					}
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					container: 'hsl(var(--primary-container))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					container: 'hsl(var(--secondary-container))',
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
					container: 'hsl(var(--tertiary-container))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					container: 'hsl(var(--success-container))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
					container: 'hsl(var(--warning-container))',
				},
				error: {
					DEFAULT: 'hsl(var(--error))',
					foreground: 'hsl(var(--error-foreground))',
					container: 'hsl(var(--error-container))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				outline: {
					DEFAULT: 'hsl(var(--outline))',
					variant: 'hsl(var(--outline-variant))',
				},
				wallet: {
					blue: 'hsl(var(--wallet-blue))',
					green: 'hsl(var(--wallet-green))',
					yellow: 'hsl(var(--wallet-yellow))',
					red: 'hsl(var(--wallet-red))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			spacing: {
				'xs': 'var(--space-xs)',
				'sm': 'var(--space-sm)',
				'md': 'var(--space-md)',
				'lg': 'var(--space-lg)',
				'xl': 'var(--space-xl)',
				'2xl': 'var(--space-2xl)',
				'3xl': 'var(--space-3xl)',
				'4xl': 'var(--space-4xl)',
				'5xl': 'var(--space-5xl)',
				'6xl': 'var(--space-6xl)',
			},
			borderRadius: {
				'xs': 'var(--radius-xs)',
				'sm': 'var(--radius-sm)',
				'md': 'var(--radius-md)',
				'lg': 'var(--radius-lg)',
				'xl': 'var(--radius-xl)',
				DEFAULT: 'var(--radius)',
			},
			transitionDuration: {
				'short-1': 'var(--duration-short-1)',
				'short-2': 'var(--duration-short-2)',
				'short-3': 'var(--duration-short-3)',
				'short-4': 'var(--duration-short-4)',
				'medium-1': 'var(--duration-medium-1)',
				'medium-2': 'var(--duration-medium-2)',
				'medium-3': 'var(--duration-medium-3)',
				'medium-4': 'var(--duration-medium-4)',
				'long-1': 'var(--duration-long-1)',
				'long-2': 'var(--duration-long-2)',
				'long-3': 'var(--duration-long-3)',
				'long-4': 'var(--duration-long-4)',
			},
			transitionTimingFunction: {
				'standard': 'var(--easing-standard)',
				'standard-decelerate': 'var(--easing-standard-decelerate)',
				'standard-accelerate': 'var(--easing-standard-accelerate)',
				'emphasized': 'var(--easing-emphasized)',
				'emphasized-decelerate': 'var(--easing-emphasized-decelerate)',
				'emphasized-accelerate': 'var(--easing-emphasized-accelerate)',
			},
			boxShadow: {
				'elevation-1': 'var(--elevation-1)',
				'elevation-2': 'var(--elevation-2)',
				'elevation-3': 'var(--elevation-3)',
				'elevation-4': 'var(--elevation-4)',
				'elevation-5': 'var(--elevation-5)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
