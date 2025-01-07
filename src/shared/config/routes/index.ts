export const PathNames = {
	root: '/'
} as const

export type PathNamesKeys = keyof typeof PathNames
export type PathNamesValues = typeof PathNames[PathNamesKeys]