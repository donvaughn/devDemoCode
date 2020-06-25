// TODO: 2) die Production Variante erstellen, mit leeren Werte

// TODO: 3) "fileReplacements" in angular.json so erweitern, damit diese Datei in Production verwendet wird:
//
//       "configurations": {
//         "production": {
//           "fileReplacements": [
//             ...
//             {
//               "replace": "src/app/demo/demo-definitions.ts",
//               "with": "src/app/demo/demo-definitions.prod.ts"
//             }
//           ],

// TODO: 4) tsconfig.app.json so erweitern, damit die Demo Dateien nicht im Production Kompilat landen
//
// ACHTUNG: Falls die tsconfig.app.json unter src/ liegt, dann kommt sie aus der Definition unten
//
// VORSICHT: die "exclude" Option wird ignoriert, wenn eine Demo-Datei "import"-iert wird. Das heißt, die Production Replacements und alle
// Production Dateien dürfen KEINERLEI "imports"s von Demo Dateien enthalten.
//         {
//           "extends": "./tsconfig.json",
//           ...
//           "exclude": [
//             "src/demo/**/*"
//           ]
//         }

export const demoComponents = [];

export const demoRoutes = [];

export const demoCode2 = 'EVIL DEMO CODE2';
