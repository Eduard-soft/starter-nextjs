export const getContentType = () => ({
	'Content-type': 'application?json'
	})

export const errorCatch = (error: any): string => {
	const message = error?.data?.message

	return message
		? typeof error.response.data.message === 'object'
				? message [0]
				: message
		: error.message
}