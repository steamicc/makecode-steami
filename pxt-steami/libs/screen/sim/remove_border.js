const fs = require('fs');
const path = require('path');

// Chemin du fichier source et du fichier de sortie
const inputFilePath = path.join(__dirname, 'screenPreset.ts');
const outputFilePath = path.join(__dirname, 'emojis_modified.ts');

// Modèle du contour à utiliser pour la suppression des bordures
const contour = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Fonction pour supprimer les bordures en utilisant le modèle contour
function removeBorders(emoji) {
    return emoji.map((row, rowIndex) => 
        row.map((cell, colIndex) => 
            contour[rowIndex][colIndex] === 1 ? 0 : cell
        )
    );
}

// Chargement du fichier source
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }

    // Extraction du tableau emojis
    const emojisRegex = /const emojis = (\[.*?\]);/s;
    const match = data.match(emojisRegex);

    if (!match) {
        console.error("La constante emojis n'a pas été trouvée dans le fichier.");
        return;
    }

    // Conversion de la constante emojis en objet manipulable
    const emojis = eval(match[1]);

    // Suppression des bordures de chaque émoji
    const modifiedEmojis = emojis.map(removeBorders);

    // Génération du nouveau contenu du fichier avec emojis modifié
    const outputData = `namespace pxsim.screen {
    export const emojis = ${JSON.stringify(modifiedEmojis, null, 4)};
}`;

    // Écriture du nouveau fichier
    fs.writeFile(outputFilePath, outputData, 'utf8', (err) => {
        if (err) {
            console.error("Erreur lors de l'écriture du fichier:", err);
            return;
        }
        console.log("Fichier mis à jour et enregistré avec succès :", outputFilePath);
    });
});
