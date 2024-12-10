export async function GET(req: Request) {
	const token = process.env.GITHUB_PERSONAL_TOKEN;
	const apiUrl = process.env.GITHUB_API_URL as string;


	if (!token) {
		return new Response(
			JSON.stringify({ error: 'GitHub token is missing' }),
			{ status: 400 }
		);
	}

	try {
		const response = await fetch(apiUrl, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			cache: "no-store",
		});

		if (!response.ok) {
			const errorData = await response.json();
			return new Response(
				JSON.stringify({ error: errorData.message || 'Failed to fetch repositories' }),
				{ status: response.status }
			);
		}

		const data = await response.json();
		return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'An error occurred while fetching repositories' }),
			{ status: 500 }
		);
	}
}
