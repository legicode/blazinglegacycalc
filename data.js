const stats = ["HP", "ATK", "SKL", "SPD", "LCK", "DEF", "RES", "CON", "MOV"];
const statsfull = ["HP", "Attack", "Skill", "Speed", "Luck", "Defense", "Resistance", "Constitution", "Movement"];

const characters = ["Lyn", "Lyn (E/H)", "Sain", "Sain (E/H)", "Kent", "Kent (E/H)", "Florina", "Florina (E/H)", "Wil", "Wil (E/H)", "Dorcas", "Serra", "Serra (E/H)", "Erk", "Erk (E/H)", "Rath", "Rath (E/H)", "Matthew", "Matthew (E/H)", "Nils (L)", 
	"Ninian (E/H)", "Lucius", "Lucius (E/H)", "Wallace", "Wallace (E/H)", "Eliwood", "Marcus", "Lowen", "Rebecca", "Bartre", "Hector", "Oswin", "Guy", "Guy (Hard)", "Merlinus", "Priscilla", "Raven", "Raven (Hard)",  "Canas", "Dart", "Dart (Hard)", "Fiora", 
	"Legault", "Legault (Hard)", "Isadora", "Heath", "Heath (Hard)", "Hawkeye", "Geitz", "Geitz (Hard)", "Farina", "Pent", "Louise", "Karel", "Karel (Hard)", "Harken", "Harken (Hard)", "Nino", "Jaffar", "Vaida", "Vaida (Hard)", "Karla", "Renault", "Athos"];

const charGrowths = new Map([
	["Lyn", 			[70, 40, 60, 65, 55, 20, 40, 0, 0]],
	["Lyn (E/H)", 		[70, 40, 60, 65, 55, 20, 40, 0, 0]],
	["Sain", 			[85, 60, 35, 40, 35, 20, 20, 0, 0]],
	["Sain (E/H)", 		[85, 60, 35, 40, 35, 20, 20, 0, 0]],
	["Kent", 			[85, 40, 50, 45, 20, 30, 25, 0, 0]],
	["Kent (E/H)", 		[85, 40, 50, 45, 20, 30, 25, 0, 0]],
	["Florina", 		[60, 40, 50, 55, 50, 15, 35, 0, 0]],
	["Florina (E/H)", 	[60, 40, 50, 55, 50, 15, 35, 0, 0]],
	["Wil", 			[75, 60, 50, 40, 40, 20, 25, 0, 0]],
	["Wil (E/H)", 		[75, 60, 50, 40, 40, 20, 25, 0, 0]],
	["Dorcas",			[75, 55, 45, 30, 45, 40, 30, 0, 0]],
	["Serra", 			[50, 50, 30, 50, 60, 15, 55, 0, 0]],
	["Serra (E/H)", 	[50, 50, 30, 50, 60, 15, 55, 0, 0]],
	["Erk", 			[65, 50, 45, 50, 30, 20, 40, 0, 0]],
	["Erk (E/H)", 		[65, 50, 45, 50, 30, 20, 40, 0, 0]],
	["Rath", 			[80, 50, 40, 50, 30, 10, 25, 0, 0]],
	["Rath (E/H)", 		[80, 50, 40, 50, 30, 10, 25, 0, 0]],
	["Matthew", 		[75, 30, 40, 70, 50, 25, 20, 0, 0]],
	["Matthew (E/H)", 	[75, 30, 40, 70, 50, 25, 20, 0, 0]],
	["Nils (L)", 		[85,  5,  5, 70, 80, 30, 70, 0, 0]],
	["Ninian (E/H)", 	[85,  5,  5, 70, 80, 30, 70, 0, 0]],
	["Lucius", 			[60, 60, 50, 40, 20, 10, 60, 0, 0]],
	["Lucius (E/H)", 	[60, 60, 50, 40, 20, 10, 60, 0, 0]],
	["Wallace", 		[70, 45, 40, 20, 30, 35, 35, 0, 0]],
	["Wallace (E/H)", 	[70, 45, 40, 20, 30, 35, 35, 0, 0]],
	["Eliwood", 		[80, 45, 50, 50, 60, 35, 35, 0, 0]],
	["Marcus", 			[65, 30, 50, 25, 30, 15, 35, 0, 0]],
	["Lowen", 			[90, 30, 30, 30, 50, 40, 30, 0, 0]],
	["Rebecca", 		[60, 40, 50, 60, 50, 15, 30, 0, 0]],
	["Bartre", 			[85, 50, 35, 40, 30, 30, 25, 0, 0]],
	["Hector", 			[90, 60, 45, 35, 30, 55, 25, 0, 0]],
	["Oswin", 			[90, 40, 30, 30, 35, 55, 30, 0, 0]],
	["Guy", 			[75, 30, 50, 70, 45, 15, 25, 0, 0]],
	["Guy (Hard)", 		[75, 30, 50, 70, 45, 15, 25, 0, 0]],
	["Merlinus", 		[120, 0, 90, 90,100, 30, 15, 0, 0]],
	["Priscilla", 		[45, 40, 50, 40, 65, 15, 50, 0, 0]],
	["Raven", 			[85, 55, 40, 45, 35, 25, 15, 0, 0]],
	["Raven (Hard)", 	[85, 55, 40, 45, 35, 25, 15, 0, 0]],
	["Canas", 			[70, 50, 40, 35, 25, 35, 45, 0, 0]],
	["Dart", 			[70, 65, 20, 60, 35, 20, 15, 0, 0]],
	["Dart (Hard)", 	[70, 65, 20, 60, 35, 20, 15, 0, 0]],
	["Fiora", 			[70, 35, 60, 50, 30, 20, 50, 0, 0]],
	["Legault", 		[60, 25, 45, 60, 60, 25, 25, 0, 0]],
	["Legault (Hard)", 	[60, 25, 45, 60, 60, 25, 25, 0, 0]],
	["Isadora", 		[75, 40, 35, 50, 45, 20, 25, 0, 0]],
	["Heath", 			[80, 50, 50, 45, 20, 30, 20, 0, 0]],
	["Heath (Hard)", 	[80, 50, 50, 45, 20, 30, 20, 0, 0]],
	["Hawkeye", 		[50, 40, 30, 25, 40, 20, 35, 0, 0]],
	["Geitz", 			[85, 50, 30, 40, 40, 20, 20, 0, 0]],
	["Geitz (Hard)", 	[85, 50, 30, 40, 40, 20, 20, 0, 0]],
	["Farina", 			[75, 50, 40, 45, 45, 25, 30, 0, 0]],
	["Pent", 			[50, 30, 20, 40, 40, 30, 35, 0, 0]],
	["Louise", 			[60, 40, 40, 40, 30, 20, 30, 0, 0]],
	["Karel", 			[70, 30, 50, 50, 30, 10, 15, 0, 0]],
	["Karel (Hard)", 	[70, 30, 50, 50, 30, 10, 15, 0, 0]],
	["Harken",			[80, 35, 30, 40, 20, 30, 25, 0, 0]],
	["Harken (Hard)",	[80, 35, 30, 40, 20, 30, 25, 0, 0]],
	["Nino", 			[55, 70, 55, 80, 45, 15, 60, 0, 0]],
	["Jaffar", 			[65, 15, 40, 35, 20, 30, 30, 0, 0]],
	["Vaida", 			[60, 45, 25, 40, 30, 25, 15, 0, 0]],
	["Vaida (Hard)", 	[60, 45, 25, 40, 30, 25, 15, 0, 0]],
	["Karla", 			[60, 25, 45, 55, 40, 10, 20, 0, 0]],
	["Renault", 		[60, 40, 30, 35, 15, 20, 40, 0, 0]],
	["Athos", 			[ 0,  0,  0,  0,  0,  0,  0, 0, 0]]
]);

const charBases = new Map([
	["Lyn", 			[ 1, 18,  5,  7,  8,  5,  3,  2,  5,  6]],
	["Lyn (E/H)", 		[ 8, 23,  7, 11, 14,  9,  4,  4,  5,  6]],
	["Sain", 			[ 1, 19,  8,  4,  6,  4,  6,  0,  9,  7]],
	["Sain (E/H)", 		[ 8, 25, 12,  7,  9,  6,  8,  1,  9,  7]],
	["Kent", 			[ 1, 20,  6,  6,  8,  3,  5,  1,  9,  7]],
	["Kent (E/H)", 		[ 8, 26, 10,  9, 11,  5,  7,  3,  9,  7]],
	["Florina", 		[ 1, 17,  5,  7, 10,  7,  4,  6,  4,  7]],
	["Florina (E/H)", 	[ 6, 20,  7, 10, 13, 10,  5,  8,  4,  7]],
	["Wil", 			[ 2, 21,  8,  5,  6,  7,  5,  1,  8,  5]],
	["Wil (E/H)", 		[ 6, 24, 10,  7,  8,  9,  6,  2,  8,  5]],
	["Dorcas",			[ 4, 32,  8, 10,  6,  5,  6,  1, 14,  5]],
	["Serra", 			[ 1, 18,  6,  6,  9,  7,  2,  7,  4,  5]],
	["Serra (E/H)", 	[ 2, 18,  6,  6,  9,  7,  2,  7,  4,  5]],
	["Erk", 			[ 1, 18,  5,  8,  8,  4,  4,  4,  6,  5]],
	["Erk (E/H)", 		[ 4, 20,  7,  9, 10,  4,  5,  5,  6,  5]],
	["Rath", 			[ 9, 27,  9, 10, 12,  6,  8,  2,  8,  7]],
	["Rath (E/H)", 		[12, 29, 10, 12, 14,  7,  8,  2,  8,  7]],
	["Matthew", 		[ 1, 20,  5,  4, 13,  3,  4,  0,  7,  6]],
	["Matthew (E/H)", 	[ 3, 20,  5,  4, 13,  3,  4,  0,  7,  6]],
	["Nils (L)", 		[ 1, 14,  0,  0, 12, 10,  5,  4,  3,  5]],
	["Ninian (E/H)", 	[ 1, 15,  0,  0, 13, 11,  6,  5,  3,  5]],
	["Lucius", 			[ 5, 20,  9,  8, 11,  3,  1,  8,  6,  5]],
	["Lucius (E/H)", 	[ 6, 20,  9,  8, 11,  3,  1,  8,  6,  5]],
	["Wallace", 		[18, 36, 17, 11,  7, 15, 18,  4, 13,  4]],
	["Wallace (E/H)", 	[ 1, 40, 20, 13, 10, 15, 22,  5, 15,  5]],
	["Eliwood", 		[ 1, 19,  6,  5,  7,  7,  6,  3,  7,  5]],
	["Marcus", 			[ 1, 31, 15, 15, 11,  8, 10,  8, 11,  8]],
	["Lowen", 			[ 2, 23,  7,  5,  7,  3,  7,  0, 10,  7]],
	["Rebecca", 		[ 1, 17,  4,  5,  6,  4,  3,  1,  5,  5]],
	["Bartre", 			[ 2, 29,  9,  5,  3,  4,  4,  0, 13,  5]],
	["Hector", 			[ 1, 19,  7,  5,  5,  3,  8,  0, 13,  5]],
	["Oswin", 			[ 9, 28, 13,  9,  5,  3, 13,  3, 14,  4]],
	["Guy", 			[ 3, 21,  6, 11, 11,  5,  5,  0,  5,  5]],
	["Guy (Hard)", 		[ 3, 25,  8, 13, 13,  5,  6,  1,  5,  5]],
	["Merlinus", 		[ 7, 18,  0,  4,  5, 12,  5,  2, 25,  0]],
	["Priscilla", 		[ 2, 15,  6,  5,  7,  6,  3,  6,  4,  7]],
	["Raven", 			[ 5, 25,  8, 11, 13,  2,  5,  1,  8,  5]],
	["Raven (Hard)", 	[ 5, 29, 10, 13, 15,  2,  6,  2,  8,  5]],
	["Canas", 			[ 8, 25, 11,  9,  8,  7,  6,  8,  7,  5]],
	["Dart", 			[ 8, 34, 12,  8,  8,  3,  6,  1, 10,  5]],
	["Dart (Hard)", 	[ 8, 38, 15, 10, 10,  3,  7,  2, 10,  5]],
	["Fiora", 			[ 8, 22,  9, 12, 13,  7,  7,  9,  7,  7]],
	["Legault", 		[12, 26,  8, 11, 15, 10,  8,  3,  9,  6]],
	["Legault (Hard)", 	[12, 29,  8, 13, 17, 10,  8,  4,  9,  6]],
	["Isadora", 		[ 1, 28, 13, 16, 16, 10, 10,  8,  8,  8]],
	["Heath", 			[ 8, 29, 13, 10,  8,  7, 11,  1,  9,  7]],
	["Heath (Hard)", 	[ 8, 33, 14, 11,  9,  7, 12,  2 , 9,  7]],
	["Hawkeye", 		[ 4, 50, 18, 14, 12, 13, 14, 10, 16,  6]],
	["Geitz", 			[ 3, 40, 17, 12, 13, 10, 11,  3, 13,  6]],
	["Geitz (Hard)", 	[ 3, 44, 19, 13, 14, 10, 12,  4, 13,  6]],
	["Farina", 			[ 1, 33, 14, 16, 18, 11, 13, 16,  7,  7]],
	["Pent", 			[ 6, 33, 18, 21, 17, 14, 11, 16,  8,  6]],
	["Louise", 			[ 4, 28, 12, 14, 19, 16,  9, 12,  7,  6]],
	["Karel", 			[ 8, 31, 16, 23, 20, 15, 13, 12,  9,  6]],
	["Karel (Hard)", 	[ 8, 34, 17, 26, 23, 15, 14, 13,  9,  6]],
	["Harken",			[ 8, 38, 21, 20, 17, 12, 15, 10, 11,  6]],
	["Harken (Hard)",	[ 8, 42, 23, 22, 18, 12, 16, 11, 11,  6]],
	["Nino", 			[ 3, 19,  7,  8, 11, 10,  4,  7,  4,  5]],
	["Jaffar", 			[13, 34, 19, 25, 24, 10, 15, 11,  8,  6]],
	["Vaida", 			[ 9, 43, 20, 19, 13, 11, 21,  6, 12,  8]],
	["Vaida (Hard)", 	[ 9, 47, 22, 21, 14, 11, 22,  7, 12,  8]],
	["Karla", 			[ 5, 32, 17, 24, 26, 19, 14, 15,  9,  6]],
	["Renault", 		[16, 45, 12, 22, 22, 12, 17, 18,  9,  6]],
	["Athos", 			[20, 40, 30, 24, 20, 25, 20, 28,  9,  6]]
]);

const promotionGains = new Map([
	["Lyn", 			[3, 2, 2, 0, 0, 3, 5, 2, 1]],
	["Lyn (E/H)", 		[3, 2, 2, 0, 0, 3, 5, 2, 1]],
	["Sain", 			[2, 1, 1, 1, 0, 2, 1, 2, 1]],
	["Sain (E/H)", 		[2, 1, 1, 1, 0, 2, 1, 2, 1]],
	["Kent", 			[2, 1, 1, 1, 0, 2, 1, 2, 1]],
	["Kent (E/H)", 		[2, 1, 1, 1, 0, 2, 1, 2, 1]],
	["Florina", 		[5, 2, 0, 0, 0, 2, 2, 1, 1]],
	["Florina (E/H)", 	[5, 2, 0, 0, 0, 2, 2, 1, 1]],
	["Wil", 			[3, 1, 2, 2, 0, 2, 3, 1, 1]],
	["Wil (E/H)", 		[3, 1, 2, 2, 0, 2, 3, 1, 1]],
	["Dorcas",			[3, 1, 2, 0, 0, 3, 3, 2, 1]],
	["Serra", 			[3, 1, 2, 1, 0, 2, 2, 1, 1]],
	["Serra (E/H)", 	[3, 1, 2, 1, 0, 2, 2, 1, 1]],
	["Erk", 			[4, 1, 0, 0, 0, 3, 3, 1, 1]],
	["Erk (E/H)", 		[4, 1, 0, 0, 0, 3, 3, 1, 1]],
	["Rath", 			[3, 2, 1, 1, 0, 3, 3, 1, 1]],
	["Rath (E/H)", 		[3, 2, 1, 1, 0, 3, 3, 1, 1]],
	["Matthew", 		[3, 1, 0, 0, 0, 2, 2, 0, 0]],
	["Matthew (E/H)", 	[3, 1, 0, 0, 0, 2, 2, 0, 0]],
	["Lucius", 			[3, 2, 1, 0, 0, 3, 2, 1, 1]],
	["Lucius (E/H)", 	[3, 2, 1, 0, 0, 3, 2, 1, 1]],
	["Wallace", 		[4, 2, 2, 3, 0, 2, 3, 2, 1]],
	["Eliwood", 		[4, 2, 0, 1, 0, 1, 3, 4, 3]],
	["Lowen", 			[2, 1, 1, 1, 0, 2, 1, 2, 1]],
	["Rebecca", 		[4, 3, 1, 1, 0, 2, 2, 1, 1]],
	["Bartre", 			[3, 1, 2, 0, 0, 3, 3, 2, 1]],
	["Hector", 			[3, 0, 2, 3, 0, 1, 5, 2, 1]],
	["Oswin", 			[4, 2, 2, 3, 0, 2, 3, 2, 1]],
	["Guy", 			[5, 2, 0, 0, 0, 2, 1, 1, 1]],
	["Guy (Hard)", 		[5, 2, 0, 0, 0, 2, 1, 1, 1]],
	["Merlinus", 		[0, 0, 0, 0, 0, 0, 0, 0, 5]],
	["Priscilla", 		[3, 2, 1, 0, 0, 2, 3, 1, 1]],
	["Raven", 			[4, 0, 2, 2, 0, 2, 2, 1, 1]],
	["Raven (Hard)", 	[4, 0, 2, 2, 0, 2, 2, 1, 1]],
	["Canas", 			[4, 0, 0, 3, 0, 2, 2, 1, 1]],
	["Dart", 			[4, 1, 1, 1, 0, 2, 2, 3, 1]],
	["Dart (Hard)", 	[4, 1, 1, 1, 0, 2, 2, 3, 1]],
	["Fiora", 			[5, 2, 0, 0, 0, 2, 2, 1, 1]],
	["Legault", 		[3, 1, 0, 0, 0, 2, 2, 0, 0]],
	["Legault (Hard)", 	[3, 1, 0, 0, 0, 2, 2, 0, 0]],
	["Heath", 			[4, 0, 2, 2, 0, 0, 2, 1, 1]],
	["Heath (Hard)", 	[4, 0, 2, 2, 0, 0, 2, 1, 1]],
	["Nino", 			[3, 1, 1, 0, 0, 3, 3, 1, 1]]
]);

const charCaps = new Map([
	["Unpromoted", 		[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Lyn", 			[60, 24, 29, 30, 30, 22, 22, 25, 15]],
	["Lyn (E/H)", 		[60, 24, 29, 30, 30, 22, 22, 25, 15]],
	["Sain", 			[60, 25, 26, 24, 30, 25, 25, 25, 15]],
	["Sain (E/H)", 		[60, 25, 26, 24, 30, 25, 25, 25, 15]],
	["Kent", 			[60, 25, 26, 24, 30, 25, 25, 25, 15]],
	["Kent (E/H)", 		[60, 25, 26, 24, 30, 25, 25, 25, 15]],
	["Florina", 		[60, 23, 25, 28, 30, 23, 26, 25, 15]],
	["Florina (E/H)", 	[60, 23, 25, 28, 30, 23, 26, 25, 15]],
	["Wil", 			[60, 25, 30, 28, 30, 25, 23, 20, 15]],
	["Wil (E/H)", 		[60, 25, 30, 28, 30, 25, 23, 20, 15]],
	["Dorcas",			[60, 30, 28, 26, 30, 26, 22, 20, 15]],
	["Serra", 			[60, 25, 25, 26, 30, 21, 30, 25, 15]],
	["Serra (E/H)", 	[60, 25, 25, 26, 30, 21, 30, 25, 15]],
	["Erk", 			[60, 28, 30, 26, 30, 21, 25, 20, 15]],
	["Erk (E/H)", 		[60, 28, 30, 26, 30, 21, 25, 20, 15]],
	["Rath", 			[60, 25, 28, 30, 30, 24, 23, 20, 15]],
	["Rath (E/H)", 		[60, 25, 28, 30, 30, 24, 23, 20, 15]],
	["Matthew", 		[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Matthew (E/H)", 	[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Nils (L)", 		[60, 10, 10, 30, 30, 24, 26, 20, 15]],
	["Ninian (E/H)", 	[60, 10, 10, 30, 30, 24, 26, 20, 15]],
	["Lucius", 			[60, 25, 26, 24, 30, 22, 30, 25, 15]],
	["Lucius (E/H)", 	[60, 25, 26, 24, 30, 22, 30, 25, 15]],
	["Wallace", 		[60, 29, 27, 24, 30, 30, 25, 20, 15]],
	["Wallace (E/H)", 	[60, 29, 27, 24, 30, 30, 25, 20, 15]],
	["Eliwood", 		[60, 27, 26, 24, 30, 23, 25, 25, 15]],
	["Marcus", 			[60, 25, 26, 24, 30, 25, 25, 25, 15]],
	["Lowen", 			[60, 25, 26, 24, 30, 25, 25, 25, 15]],
	["Rebecca", 		[60, 24, 30, 29, 30, 24, 24, 20, 15]],
	["Bartre", 			[60, 30, 28, 26, 30, 26, 22, 20, 15]],
	["Hector", 			[60, 30, 24, 24, 30, 29, 20, 25, 15]],
	["Oswin", 			[60, 29, 27, 24, 30, 30, 25, 20, 15]],
	["Guy", 			[60, 24, 29, 30, 30, 22, 23, 25, 15]],
	["Guy (Hard)", 		[60, 24, 29, 30, 30, 22, 23, 25, 15]],
	["Merlinus", 		[60, 20, 20, 20, 30, 20, 20, 25, 15]],
	["Priscilla", 		[60, 25, 24, 25, 30, 24, 28, 25, 15]],
	["Raven", 			[60, 25, 30, 26, 30, 25, 22, 20, 15]],
	["Raven (Hard)", 	[60, 25, 30, 26, 30, 25, 22, 20, 15]],
	["Canas", 			[60, 29, 26, 26, 30, 21, 28, 20, 15]],
	["Dart", 			[60, 30, 29, 28, 30, 23, 21, 20, 15]],
	["Dart (Hard)", 	[60, 30, 29, 28, 30, 23, 21, 20, 15]],
	["Fiora", 			[60, 23, 25, 28, 30, 23, 26, 25, 15]],
	["Legault", 		[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Legault (Hard)", 	[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Isadora", 		[60, 23, 27, 25, 30, 24, 26, 25, 15]],
	["Heath", 			[60, 27, 25, 23, 30, 28, 22, 25, 15]],
	["Heath (Hard)", 	[60, 27, 25, 23, 30, 28, 22, 25, 15]],
	["Hawkeye", 		[60, 30, 29, 28, 30, 23, 21, 20, 15]],
	["Geitz", 			[60, 30, 28, 26, 30, 26, 22, 20, 15]],
	["Geitz (Hard)", 	[60, 30, 28, 26, 30, 26, 22, 20, 15]],
	["Farina", 			[60, 23, 25, 28, 30, 23, 26, 25, 15]],
	["Pent", 			[60, 28, 30, 26, 30, 21, 25, 20, 15]],
	["Louise", 			[60, 24, 30, 29, 30, 24, 24, 20, 15]],
	["Karel", 			[60, 24, 29, 30, 30, 22, 23, 25, 15]],
	["Karel (Hard)", 	[60, 24, 29, 30, 30, 22, 23, 25, 15]],
	["Harken",			[60, 25, 30, 26, 30, 25, 22, 20, 15]],
	["Harken (Hard)",	[60, 25, 30, 26, 30, 25, 22, 20, 15]],
	["Nino", 			[60, 30, 28, 26, 30, 21, 25, 20, 15]],
	["Jaffar", 			[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Vaida", 			[60, 25, 26, 24, 30, 27, 23, 25, 15]],
	["Vaida (Hard)", 	[60, 25, 26, 24, 30, 27, 23, 25, 15]],
	["Karla", 			[60, 22, 29, 30, 30, 22, 25, 25, 15]],
	["Renault", 		[60, 25, 26, 24, 30, 22, 30, 25, 15]],
	["Athos", 			[60, 30, 30, 25, 30, 20, 30, 20, 15]]
]);

function updateHit(){
	trueHitRate = ((displayedHit.value * (2 * displayedHit.value + 1) - (Math.abs(displayedHit.value - 50.5) / (displayedHit.value - 50.5) + 1) * ((displayedHit.value - 50) * (2 * displayedHit.value - 99))) / 100).toString() + "%";
	spaces = 1.75*(6 - trueHitRate.length);
	if (displayedHit.value == 100){
		spaces -= 1;
	}
	for (let i = 0; i < spaces; i++){
		trueHitRate += "&nbsp";
	}
	trueHit.innerHTML = trueHitRate;
}

function updateEXP(){
	let playerPower = 3;
	if (playerType.selectedIndex == 2){
		playerPower = 2;
	}
	else if (playerType.selectedIndex == 4){
		playerPower = 1;
	}
	let expGain = Math.max(Math.floor((31 + enemyLevel.value * 1 - playerLevel.value * 1) / (playerPower)), 1);
	if (killEXP.checked){
		let playerBonus = 0;
		if (playerType.selectedIndex == 1){
			playerBonus = 60;
		}
		else if (playerType.selectedIndex == 3 || playerType.selectedIndex == 5){
			playerBonus = 40;
		}
		let enemyPower = 3;
		let enemyBonus = 0;
		let thiefEXP = 0;
		if (enemyType.selectedIndex == 1){
			enemyBonus = 60;
		}
		else if (enemyType.selectedIndex == 2){
			enemyPower = 2;
			thiefEXP = 20;
		}
		else if (enemyType.selectedIndex == 3){
			enemyBonus = 40;
			thiefEXP = 20;
		}
		else if (enemyType.selectedIndex == 4){
			enemyPower = 2;
		}
		else if (enemyType.selectedIndex == 5){
			enemyBonus = 40;
		}
		else if (enemyType.selectedIndex == 6){
			enemyPower = 5;
			bossEXP.checked = true;
			modeEXP.checked = false;
			enemyLevel.selectedIndex = 0;
		}
		let mode = modeEXP.checked * 1 + 1;
		if (mode == 1){
			if (enemyLevel.value * enemyPower + enemyBonus <= playerLevel.vaule * playerPower + playerBonus){
				mode = 2;
			}
		}
		expGain += Math.max(Math.floor((silencerEXP.checked * 1 + 1) * ((enemyLevel.value * enemyPower + enemyBonus) - ((playerLevel.value * playerPower + playerBonus) / mode) + 20 + thiefEXP + bossEXP.checked * 40)), 0);
		expGain = Math.min(expGain, 100);
	}
	exp.innerHTML = expGain + " EXP";
}

function updateCharAverage(){
	if (charAverage.value != "Merlinus"){
		if (promoLevelAverage.options.length == 1){
			promoLevelAverage.remove(0);
			for (let i = 20; i >= 10; i--) {
				promoLevelAverage.options[20-i] = new Option(i);
			}
		}
	}
	else{
		while (promoLevelAverage.options.length > 0){
			promoLevelAverage.remove(0);
		}
		promoLevelAverage.options[0] = new Option(19);
	}
	updateAverageTable();
}

function updateAverageTable(){
	char = charAverage.value;
	var averageGrowths = document.getElementById("averageGrowths");
	while (averageGrowths.rows.length > 2){
		averageGrowths.deleteRow(1);
	}
	row = averageGrowths.insertRow(1);
	level = row.insertCell(0);
	hp = row.insertCell(1);
	atk = row.insertCell(2);
	skl = row.insertCell(3);
	spd = row.insertCell(4);
	lck = row.insertCell(5);
	def = row.insertCell(6);
	res = row.insertCell(7);
	con = row.insertCell(8);
	mov = row.insertCell(9);
	level.innerHTML = "<b>Base stats</b>";
	hp.innerHTML = "<span id=\"aBaseHP\"></span>";
	atk.innerHTML = "<span id=\"aBaseATK\"></span>";
	skl.innerHTML = "<span id=\"aBaseSKL\"></span>";
	spd.innerHTML = "<span id=\"aBaseSPD\"></span>";
	lck.innerHTML = "<span id=\"aBaseLCK\"></span>";
	def.innerHTML = "<span id=\"aBaseDEF\"></span>";
	res.innerHTML = "<span id=\"aBaseRES\"></span>";
	con.innerHTML = "<span id=\"aBaseCON\"></span>";
	mov.innerHTML = "<span id=\"aBaseMOV\"></span>";
	for (let i = 0; i < 9; i++){
		this["aBase"+(stats[i])].innerHTML = charBases.get(char)[i+1];
	}
	currentHP = charBases.get(char)[1];
	currentATK = charBases.get(char)[2];
	currentSKL = charBases.get(char)[3];
	currentSPD = charBases.get(char)[4];
	currentLCK = charBases.get(char)[5];
	currentDEF = charBases.get(char)[6];
	currentRES = charBases.get(char)[7];
	currentCON = charBases.get(char)[8];
	currentMOV = charBases.get(char)[9];
	if (promotionGains.get(char) != undefined){
		let baseLevel = charBases.get(char)[0];
		for (let i = baseLevel-1; i < promoLevelAverage.value - 1; i++){
			row = averageGrowths.insertRow(averageGrowths.rows.length - 1);
			let level = row.insertCell(0);
			let hp = row.insertCell(1);
			let atk = row.insertCell(2);
			let skl = row.insertCell(3);
			let spd = row.insertCell(4);
			let lck = row.insertCell(5);
			let def = row.insertCell(6);
			let res = row.insertCell(7);
			let con = row.insertCell(8);
			let mov = row.insertCell(9);
			level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
			hp.innerHTML = "<span id=\"level"+(i+2).toString()+"HPavg\"></span>";
			atk.innerHTML = "<span id=\"level"+(i+2).toString()+"ATKavg\"></span>";
			skl.innerHTML = "<span id=\"level"+(i+2).toString()+"SKLavg\"></span>";
			spd.innerHTML = "<span id=\"level"+(i+2).toString()+"SPDavg\"></span>";
			lck.innerHTML = "<span id=\"level"+(i+2).toString()+"LCKavg\"></span>";
			def.innerHTML = "<span id=\"level"+(i+2).toString()+"DEFavg\"></span>";
			res.innerHTML = "<span id=\"level"+(i+2).toString()+"RESavg\"></span>";
			con.innerHTML = "<span id=\"level"+(i+2).toString()+"CONavg\"></span>";
			mov.innerHTML = "<span id=\"level"+(i+2).toString()+"MOVavg\"></span>";
			for (let j = 0; j < 9; j++){
				this["current"+stats[j]] += charGrowths.get(char)[j] / 100;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				let baseCaps = "Unpromoted";
				if (char == "Merlinus"){
					baseCaps = "Merlinus";
				}
				if (this["current"+stats[j]] >= charCaps.get(baseCaps)[j]){
					this["current"+stats[j]] = charCaps.get(baseCaps)[j];
					this["level"+(i+2).toString()+stats[j]+"avg"].innerHTML = "<b>"+this["current"+stats[j]]+"</b>";
				}
				else{
					this["level"+(i+2).toString()+stats[j]+"avg"].innerHTML = this["current"+stats[j]];
				}
			}
		}
		row = averageGrowths.insertRow(averageGrowths.rows.length - 1);
		let level = row.insertCell(0);
		let hp = row.insertCell(1);
		let atk = row.insertCell(2);
		let skl = row.insertCell(3);
		let spd = row.insertCell(4);
		let lck = row.insertCell(5);
		let def = row.insertCell(6);
		let res = row.insertCell(7);
		let con = row.insertCell(8);
		let mov = row.insertCell(9);
		level.innerHTML = "<b>Promotion</b>";
		currentHP += promotionGains.get(char)[0];
		currentATK += promotionGains.get(char)[1];
		currentSKL += promotionGains.get(char)[2];
		currentSPD += promotionGains.get(char)[3];
		currentLCK += promotionGains.get(char)[4];
		currentDEF += promotionGains.get(char)[5];
		currentRES += promotionGains.get(char)[6];
		currentCON += promotionGains.get(char)[7];
		currentMOV += promotionGains.get(char)[8];
		hp.innerHTML = "<b>"+Math.round(currentHP * 100) / 100+"</b>";
		atk.innerHTML = "<b>"+Math.round(currentATK * 100) / 100+"</b>";
		skl.innerHTML = "<b>"+Math.round(currentSKL * 100) / 100+"</b>";
		spd.innerHTML = "<b>"+Math.round(currentSPD * 100) / 100+"</b>";
		lck.innerHTML = "<b>"+Math.round(currentLCK * 100) / 100+"</b>";
		def.innerHTML = "<b>"+Math.round(currentDEF * 100) / 100+"</b>";
		res.innerHTML = "<b>"+Math.round(currentRES * 100) / 100+"</b>";
		con.innerHTML = "<b>"+Math.round(currentCON * 100) / 100+"</b>";
		mov.innerHTML = "<b>"+Math.round(currentMOV * 100) / 100+"</b>";
	}
	let baseLevel = 1;
	if (promotionGains.get(char) == undefined){
		baseLevel = charBases.get(char)[0];
	}
	let levelCap = 20;
	if (char == "Merlinus"){
		levelCap = 10;
	}
	for (let i = baseLevel-1; i < levelCap - 1; i++){
		row = averageGrowths.insertRow(averageGrowths.rows.length - 1);
		let level = row.insertCell(0);
		let hp = row.insertCell(1);
		let atk = row.insertCell(2);
		let skl = row.insertCell(3);
		let spd = row.insertCell(4);
		let lck = row.insertCell(5);
		let def = row.insertCell(6);
		let res = row.insertCell(7);
		let con = row.insertCell(8);
		let mov = row.insertCell(9);
		level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
		hp.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"HPavg\"></span>";
		atk.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"ATKavg\"></span>";
		skl.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SKLavg\"></span>";
		spd.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SPDavg\"></span>";
		lck.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"LCKavg\"></span>";
		def.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"DEFavg\"></span>";
		res.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"RESavg\"></span>";
		con.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"CONavg\"></span>";
		mov.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"MOVavg\"></span>";
		for (let j = 0; j < 9; j++){
			this["current"+stats[j]] += charGrowths.get(char)[j] / 100;
			this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;

			if (this["current"+stats[j]] >= charCaps.get(char)[j]){
				this["current"+stats[j]] = charCaps.get(char)[j];
				this["Plevel"+(i+2).toString()+stats[j]+"avg"].innerHTML = "<b>"+this["current"+stats[j]]+"</b>";
			}
			else{
				this["Plevel"+(i+2).toString()+stats[j]+"avg"].innerHTML = this["current"+stats[j]];
			}
		}
	}
}

function updateCharFixed(){
	if (charFixed.value != "Merlinus"){
		if (promoLevelFixed.options.length == 1){
			promoLevelFixed.remove(0);
			for (let i = 20; i >= 10; i--) {
				promoLevelFixed.options[20-i] = new Option(i);
			}
		}
	}
	else{
		while (promoLevelFixed.options.length > 0){
			promoLevelFixed.remove(0);
		}
		promoLevelFixed.options[0] = new Option(19);
	}
	updateFixedTable();
}

function updateFixedTable(){
	char = charFixed.value;
	var fixedGrowths = document.getElementById("fixedGrowths");
	while (fixedGrowths.rows.length > 2){
		fixedGrowths.deleteRow(1);
	}
	row = fixedGrowths.insertRow(1);
	level = row.insertCell(0);
	hp = row.insertCell(1);
	atk = row.insertCell(2);
	skl = row.insertCell(3);
	spd = row.insertCell(4);
	lck = row.insertCell(5);
	def = row.insertCell(6);
	res = row.insertCell(7);
	con = row.insertCell(8);
	mov = row.insertCell(9);
	level.innerHTML = "<b>Base stats</b>";
	hp.innerHTML = "<span id=\"fBaseHP\"></span>";
	atk.innerHTML = "<span id=\"fBaseATK\"></span>";
	skl.innerHTML = "<span id=\"fBaseSKL\"></span>";
	spd.innerHTML = "<span id=\"fBaseSPD\"></span>";
	lck.innerHTML = "<span id=\"fBaseLCK\"></span>";
	def.innerHTML = "<span id=\"fBaseDEF\"></span>";
	res.innerHTML = "<span id=\"fBaseRES\"></span>";
	con.innerHTML = "<span id=\"fBaseCON\"></span>";
	mov.innerHTML = "<span id=\"fBaseMOV\"></span>";
	for (let i = 0; i < 9; i++){
		this["fBase"+(stats[i])].innerHTML = charBases.get(char)[i+1];
	}
	currentHP = charBases.get(char)[1];
	currentATK = charBases.get(char)[2];
	currentSKL = charBases.get(char)[3];
	currentSPD = charBases.get(char)[4];
	currentLCK = charBases.get(char)[5];
	currentDEF = charBases.get(char)[6];
	currentRES = charBases.get(char)[7];
	currentCON = charBases.get(char)[8];
	currentMOV = charBases.get(char)[9];
	if (promotionGains.get(char) != undefined){
		let baseLevel = charBases.get(char)[0];
		for (let i = baseLevel-1; i < promoLevelFixed.value - 1; i++){
			row = fixedGrowths.insertRow(fixedGrowths.rows.length - 1);
			let level = row.insertCell(0);
			let hp = row.insertCell(1);
			let atk = row.insertCell(2);
			let skl = row.insertCell(3);
			let spd = row.insertCell(4);
			let lck = row.insertCell(5);
			let def = row.insertCell(6);
			let res = row.insertCell(7);
			let con = row.insertCell(8);
			let mov = row.insertCell(9);
			level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
			hp.innerHTML = "<span id=\"level"+(i+2).toString()+"HPgrowth\"></span>";
			atk.innerHTML = "<span id=\"level"+(i+2).toString()+"ATKgrowth\"></span>";
			skl.innerHTML = "<span id=\"level"+(i+2).toString()+"SKLgrowth\"></span>";
			spd.innerHTML = "<span id=\"level"+(i+2).toString()+"SPDgrowth\"></span>";
			lck.innerHTML = "<span id=\"level"+(i+2).toString()+"LCKgrowth\"></span>";
			def.innerHTML = "<span id=\"level"+(i+2).toString()+"DEFgrowth\"></span>";
			res.innerHTML = "<span id=\"level"+(i+2).toString()+"RESgrowth\"></span>";
			con.innerHTML = "<span id=\"level"+(i+2).toString()+"CONgrowth\"></span>";
			mov.innerHTML = "<span id=\"level"+(i+2).toString()+"MOVgrowth\"></span>";
			for (let j = 0; j < 9; j++){
				stat = Math.round((i+1) * charGrowths.get(char)[j] / 100) - Math.round(i * charGrowths.get(char)[j] / 100);
				let baseCaps = "Unpromoted";
				if (char == "Merlinus"){
					baseCaps = "Merlinus";
				}
				if (stat == 0){
					if (this["current"+stats[j]] == charCaps.get(baseCaps)[j]){
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u>"+this["current"+stats[j]]+"</u>";
					}
					else {
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = this["current"+stats[j]];
					}
				}
				if (stat == 1){
					if (this["current"+stats[j]] + 1 == charCaps.get(baseCaps)[j]){
						this["current"+stats[j]] += 1;
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u><b>"+this["current"+stats[j]]+"</b></u>";
					}
					else if (this["current"+stats[j]] == charCaps.get(baseCaps)[j]){
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u>"+this["current"+stats[j]]+"</u>";
					}
					else {
						this["current"+stats[j]] += 1;
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<b>"+this["current"+stats[j]]+"</b>";
					}
				}
				if (stat > 1){
					if (this["current"+stats[j]] + 1 == charCaps.get(baseCaps)[j]){
						this["current"+stats[j]] += 1;
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u><b>"+this["current"+stats[j]]+"</b></u>";
					}
					else if (this["current"+stats[j]] == charCaps.get(baseCaps)[j]){
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u>"+this["current"+stats[j]]+"</u>";
					}
					else if (this["current"+stats[j]] + stat >= charCaps.get(baseCaps)[j]){
						this["current"+stats[j]] = charCaps.get(baseCaps)[j];
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u><i><b>"+this["current"+stats[j]]+"</b></i></u>";
					}
					else {
						this["current"+stats[j]] += stat;
						this["level"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<i><b>"+this["current"+stats[j]]+"</b></i>";
					}
				}
			}
		}
		row = fixedGrowths.insertRow(fixedGrowths.rows.length - 1);
		let level = row.insertCell(0);
		let hp = row.insertCell(1);
		let atk = row.insertCell(2);
		let skl = row.insertCell(3);
		let spd = row.insertCell(4);
		let lck = row.insertCell(5);
		let def = row.insertCell(6);
		let res = row.insertCell(7);
		let con = row.insertCell(8);
		let mov = row.insertCell(9);
		level.innerHTML = "<b>Promotion</b>";
		currentHP += promotionGains.get(char)[0];
		currentATK += promotionGains.get(char)[1];
		currentSKL += promotionGains.get(char)[2];
		currentSPD += promotionGains.get(char)[3];
		currentLCK += promotionGains.get(char)[4];
		currentDEF += promotionGains.get(char)[5];
		currentRES += promotionGains.get(char)[6];
		currentCON += promotionGains.get(char)[7];
		currentMOV += promotionGains.get(char)[8];
		hp.innerHTML = "<u>"+currentHP+"</u>";
		atk.innerHTML = "<u>"+currentATK+"</u>";
		skl.innerHTML = "<u>"+currentSKL+"</u>";
		spd.innerHTML = "<u>"+currentSPD+"</u>";
		lck.innerHTML = "<u>"+currentLCK+"</u>";
		def.innerHTML = "<u>"+currentDEF+"</u>";
		res.innerHTML = "<u>"+currentRES+"</u>";
		con.innerHTML = "<u>"+currentCON+"</u>";
		mov.innerHTML = "<u>"+currentMOV+"</u>";
	}
	let baseLevel = 1;
	if (promotionGains.get(char) == undefined){
		baseLevel = charBases.get(char)[0];
	}
	let levelCap = 20;
	if (char == "Merlinus"){
		levelCap = 10;
	}
	for (let i = baseLevel-1; i < levelCap - 1; i++){
		row = fixedGrowths.insertRow(fixedGrowths.rows.length - 1);
		let level = row.insertCell(0);
		let hp = row.insertCell(1);
		let atk = row.insertCell(2);
		let skl = row.insertCell(3);
		let spd = row.insertCell(4);
		let lck = row.insertCell(5);
		let def = row.insertCell(6);
		let res = row.insertCell(7);
		let con = row.insertCell(8);
		let mov = row.insertCell(9);
		level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
		hp.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"HPgrowth\"></span>";
		atk.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"ATKgrowth\"></span>";
		skl.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SKLgrowth\"></span>";
		spd.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SPDgrowth\"></span>";
		lck.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"LCKgrowth\"></span>";
		def.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"DEFgrowth\"></span>";
		res.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"RESgrowth\"></span>";
		con.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"CONgrowth\"></span>";
		mov.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"MOVgrowth\"></span>";
		for (let j = 0; j < 9; j++){
			stat = Math.round((i+1) * charGrowths.get(char)[j] / 100) - Math.round(i * charGrowths.get(char)[j] / 100);
			if (stat == 0){
				if (this["current"+stats[j]] == charCaps.get(char)[j]){
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u>"+this["current"+stats[j]]+"</u>";
				}
				else {
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = this["current"+stats[j]];
				}
			}
			if (stat == 1){
				if (this["current"+stats[j]] + 1 == charCaps.get(char)[j]){
					this["current"+stats[j]] += 1;
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u><b>"+this["current"+stats[j]]+"</b></u>";
				}
				else if (this["current"+stats[j]] == charCaps.get(char)[j]){
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u>"+this["current"+stats[j]]+"</u>";
				}
				else {
					this["current"+stats[j]] += 1;
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<b>"+this["current"+stats[j]]+"</b>";
				}
			}
			if (stat > 1){
				if (this["current"+stats[j]] + 1 == charCaps.get(char)[j]){
					this["current"+stats[j]] += 1;
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u><b>"+this["current"+stats[j]]+"</b></u>";
				}
				else if (this["current"+stats[j]] == charCaps.get(char)[j]){
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u>"+this["current"+stats[j]]+"</u>";
				}
				else if (this["current"+stats[j]] + stat >= charCaps.get(char)[j]){
					this["current"+stats[j]] = charCaps.get(char)[j];
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<u><i><b>"+this["current"+stats[j]]+"</b></i></u>";
				}
				else {
					this["current"+stats[j]] += stat;
					this["Plevel"+(i+2).toString()+stats[j]+"growth"].innerHTML = "<i><b>"+this["current"+stats[j]]+"</b></i>";
				}
			}
		}
	}
}

var displayedHit = document.getElementById("displayedHit");
var trueHit = document.getElementById("trueHit");
for (let i = 0; i <= 100; i++){
	displayedHit.options[i] = new Option(100-i);
}
displayedHit.selectedIndex = 25;
updateHit();

var playerLevel = document.getElementById("playerLevel");
var enemyLevel = document.getElementById("enemyLevel");
var playerType = document.getElementById("playerType");
var enemyType = document.getElementById("enemyType");
var killEXP = document.getElementById("killEXP");
var modeEXP = document.getElementById("modeEXP");
var bossEXP = document.getElementById("bossEXP");
var silencerEXP = document.getElementById("silencerEXP");
var exp = document.getElementById("exp");
for (let i = 0; i < 40; i++){
	playerLevel.options[i] = new Option(40-i);
	enemyLevel.options[i] = new Option(40-i);
}
playerLevel.selectedIndex = 20;
enemyLevel.selectedIndex = 20;
playerType.selectedIndex = 0;
enemyType.selectedIndex = 0;
killEXP.checked = true;
modeEXP.checked = false;
bossEXP.checked = false;
silencerEXP.checked = false;
updateEXP();

var charAverage = document.getElementById("charAverage");
var promoLevelAverage = document.getElementById("promoLevelAverage");
var promoClassAverage = document.getElementById("promoClassAverage");
for (let i = 0; i < characters.length; i++) {
	if (characters[i] == "LArachel"){
		charAverage.options[i] = new Option("L'Arachel");
	}
	else {
		charAverage.options[i] = new Option(characters[i]);
	}
}
for (let i = 20; i >= 10; i--) {
	promoLevelAverage.options[20-i] = new Option(i);
}
updateCharAverage();

var charFixed = document.getElementById("charFixed");
var promoLevelFixed = document.getElementById("promoLevelFixed");
var promoClassFixed = document.getElementById("promoClassFixed");
for (let i = 0; i < characters.length; i++) {
	if (characters[i] == "LArachel"){
		charFixed.options[i] = new Option("L'Arachel");
	}
	else {
		charFixed.options[i] = new Option(characters[i]);
	}
}
for (let i = 20; i >= 10; i--) {
	promoLevelFixed.options[20-i] = new Option(i);
}
updateCharFixed();