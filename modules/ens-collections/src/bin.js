// SPDX-License-Identifier: Apache-2.0

// import path from 'node:path';
// import fs from 'node:fs/promises';
// import { parallel } from '@tunnckocore/p-all';
import * as utils from './utils.js';

// console.log(utils.getTokens(utils.getNamesFromCSV(`〇〇九,sasa\n〇四六,dj4s`)));
console.log(utils.getTokens(`〇〇九,〇四六\nfoo jan\n121`));

// console.log(utils.getTokenInfo('⁉️⁉️.eth'));
// console.log(utils.getTokenInfo('٥٦٤.eth'));

// async function updateMetadata() {
// 	await parallel(await utils.getCollections(true), async ({ value: item }) => {
// 		const collection = item;
// 		collection.info.supply = Object.keys(collection.data).length;

// 		if (collection.info.verified) {
// 			console.log('club', collection.info.slug);
// 			console.log('================');
// 		}
// 		// console.log(
// 		// 	'club %s (%s)',
// 		// 	collection.info.slug,
// 		// 	collection.info.verified ? 'verified' : 'not verified',
// 		// );

// 		// await utils.writeCollection(collection);
// 	});
// }

// await convertCategoriesToCollections();
// await updateMetadata();

// async function convertCategoriesToCollections() {
// 	const categoryPath = path.join(
// 		path.dirname(import.meta.url.replace('file://', '')),
// 		'categories',
// 	);
// 	const allCategories = await fs.readdir(categoryPath);
// 	const list = allCategories.map((x) => path.join(categoryPath, x));

// 	console.log('Categories %s', list.length);

// 	await serial(list, async ({ value: fp }) => {
// 		const categoryCSV = await fs.readFile(fp, 'utf8');
// 		const categoryInfo = {
// 			slug: utils.slugify(path.basename(fp, path.extname(fp))),
// 		};

// 		console.log('Converting %s', categoryInfo.slug);

// 		const written = await utils.writeCollection(
// 			await utils.generateCollection(
// 				categoryInfo,
// 				utils.getNamesFromCSV(categoryCSV),
// 			),
// 		);

// 		console.log('Wrote to %s', written);
// 	});
// }
