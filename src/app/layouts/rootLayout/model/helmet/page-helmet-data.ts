const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL || "https://example.com"
const DEFAULT_IMAGE = `${WEBSITE_URL}/public/Снимок экрана 2024-12-30 233420.png`

export type LangType = "en"

export type PageHelmetDataType = {
	path: string
	title: string
	description: string
	ogTitle?: string
	ogDescription?: string
	ogImage?: string
	ogUrl?: string
}

const pageHelmetData: Record<LangType, PageHelmetDataType[]> = {
	en: [
		{
			path: "/",
			title: "Home page - VeilPay",
			description:
				"Welcome to VeilPay, online wallet. Make transfers and payments through our service, we provide complete anonymity and tasty bonuses for active customers, our service analyzes your account using artificial intelligence and summarizes the results every week",
			ogTitle: "Home Page",
			ogDescription: "Welcome to VeilPay, online wallet. Make transfers and payments through our service, we provide complete anonymity and tasty bonuses for active customers, our service analyzes your account using artificial intelligence and summarizes the results every week",
			ogImage: "favicon.ico",
			ogUrl: `${WEBSITE_URL}/`,
		},
		{
			path: "/auth",
			title: "Login page - VeilPay",
			description: "Login to your VeilPay account to access your personalized profile, connect with others, and take advantage of exclusive features.",
			ogTitle: "Login page",
			ogDescription:
				"Login to your VeilPay account to access your personalized profile, connect with others, and take advantage of exclusive features.",
			ogUrl: `${WEBSITE_URL}/auth`,
		},
		{
			path: "/auth/create",
			title: "Create account page - VeilPay",
			description:
				"Create a new account on VeilPay and start making anony pay and transfers right now",
			ogTitle: "Create account page",
			ogDescription:
				"Create a new account on VeilPay and start making anony pay and transfers right now",
			ogUrl: `${WEBSITE_URL} /auth/create`,
		},
		{
			path: "/auth/verify",
			title: "Verify page - VeilPay",
			description:
				"Enter the confirmation code that was sent to your email to complete the account creation.",
			ogTitle: "Verify page",
			ogDescription:
				"Enter the confirmation code that was sent to your email to complete the account creation.",
			ogUrl: `${WEBSITE_URL}/auth/verify`,
		},
		{
			path: "*",
			title: "Page not found - VeilPay",
			description:
				"Oops! The page you are looking for does not exist. Please return to the homepage or contact our support team if you need assistance.",
			ogTitle: "404 Page Not Found | Lost in Space?",
			ogDescription:
				"The page you requested couldn't be found. Go back to the home page or reach out for help if you need assistance navigating VeilPay.",
			ogUrl: `${WEBSITE_URL}/404`,
		},
	],
}

/**
 * Генерация JSON-LD для улучшения SEO
 */
export const generateJsonLd = (path: string) => {
	return {
		"@context": "http://schema.org",
		"@type": "WebPage",
		url: `${WEBSITE_URL}${path}`,
		name: "VeilPay",
		description:
			"VeilPay - This is an online service for making transfers and payments, the main point of which is anonymity.",
	}
}

/**
 * Генерация мета-тегов
 */export const generateMetaTags = (path: string, dynamicMeta?: Record<string, string>, lang: LangType = "en") => {
	const pageData =
		pageHelmetData[lang].find((page) => page.path === path) ||
		pageHelmetData[lang].find((page) => page.path === "*")

	const mergedMeta = {
		title: dynamicMeta?.title || pageData?.title || "VeilPay", // Используем dynamicMeta.title, если он есть
		meta: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			description: dynamicMeta?.description || pageData?.description || "VeilPay is your go-to platform.",
			"og:title": dynamicMeta?.['og:title'] || pageData?.ogTitle || pageData?.title,
			"og:description": dynamicMeta?.['og:description'] || pageData?.ogDescription || pageData?.description,
			"og:url": dynamicMeta?.['og:url'] || pageData?.ogUrl || `${WEBSITE_URL}${path}`,
			"og:image": dynamicMeta?.['og:image'] || pageData?.ogImage || DEFAULT_IMAGE,
			"og:type": "website",
			"twitter:card": "summary_large_image",
			"twitter:title": dynamicMeta?.['twitter:title'] || pageData?.ogTitle || pageData?.title,
			"twitter:description": dynamicMeta?.['twitter:description'] || pageData?.ogDescription || pageData?.description,
			"twitter:image": dynamicMeta?.['twitter:image'] || DEFAULT_IMAGE,
		},
		link: [{ rel: "icon", href: DEFAULT_IMAGE }],
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify(generateJsonLd(path)),
			},
		],
	}

	return mergedMeta
};


export { pageHelmetData, WEBSITE_URL, DEFAULT_IMAGE };