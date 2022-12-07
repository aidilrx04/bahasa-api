import { prisma } from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const ORDER = ['asc', 'desc', 'random'] as const;
type RequestQueryOptions = {
	amount: number;
	length: number;
	order: typeof ORDER[number];
};

const options: RequestQueryOptions = {
	amount: 10,
	length: 999999999,
	order: 'random'
};

export const GET: RequestHandler = async (req) => {
	if (req.request.method === 'OPTIONS') {
		return new Response(new Blob(), { status: 200 });
	}

	const searchParams = req.url.searchParams;
	const requestOptions: RequestQueryOptions = {
		amount: (searchParams.get('amount') ?? options.amount) as number,
		length: (searchParams.get('length') ?? options.length) as number,
		order: determineOrder(searchParams.get('order') as string, options.order)
	};

	let result;
	if (requestOptions.order !== 'random') {
		result = await prisma.words.findMany({
			take: Number(requestOptions.amount),
			where: {
				length: {
					lte: requestOptions.length
				}
			},
			orderBy: {
				word: requestOptions.order
			}
		});
	} else {
		// const sqlString = `SELECT * FROM words WHERE length < 5 LIMIT 10`;
		// console.log(sqlString);
		result =
			await prisma.$queryRaw`SELECT * FROM words WHERE length < ${requestOptions.length} ORDER BY RAND() LIMIT ${requestOptions.amount}`;
	}

	return new Response(JSON.stringify(result));
};

const determineOrder = (
	order: string,
	fallback: typeof ORDER[number] = 'asc'
): typeof ORDER[number] => {
	if (Array.from<string>(ORDER).includes(order)) {
		return order as typeof ORDER[number];
	}

	return fallback;
};
