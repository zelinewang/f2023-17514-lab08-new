import { ImageAnnotatorClient } from '@google-cloud/vision';

const client = new ImageAnnotatorClient();

/**
 * Runs logo detection on the given list of file names and logs the description and average score of each logo.
 * @param fileNames - An array of file names to run logo detection on.
 * @returns void
 */
function main (fileNames: string[]): void {
    fileNames.forEach((fileName: string) => {
        console.log(`Running logo detection on ${fileName}`);
        client.logoDetection(fileName)
        .then(([result]) => {
            let scores: number[] = [];
            const logos = result.logoAnnotations;
            logos?.forEach((logo) => {
                if (logo.description)
                    console.log(`"${logo.description}" found in in file ${fileName}`);
                if (logo.score)
                    scores.push(logo.score);
            });
            const avg = scores.reduce((a, b) => a + b) / scores.length;
            console.log(`Average score for ${fileName}: ${avg}`);
        })
        .catch((err) => {
            if (err.code === 'ENOENT')
                console.log(`File ${fileName} not found`);
        });
    });
}

main([
    './images/cmu.jpg', 
    './images/logo-types-collection.jpg', 
    './images/not-a-file.jpg'
]);

// Implement the async version of the above here
// Your version should not use .then and should use try/catch instead of .catch

// In mainAsync(fileNames), 
// We loop over the fileNames with a for...of loop.
// Within the loop, we try to get the logo detection results using the await keyword.
// If the detection is successful, we process the results and print them.
// If an error occurs, we catch it in the catch block and handle it accordingly.
async function mainAsync(fileNames: string[]): Promise<void> {
    for (const fileName of fileNames) {
        console.log(`Running logo detection on ${fileName}`);
        
        try {
            const [result] = await client.logoDetection(fileName);
            let scores: number[] = [];
            const logos = result.logoAnnotations;
            logos?.forEach((logo) => {
                if (logo.description)
                    console.log(`"${logo.description}" found in in file ${fileName}`);
                if (logo.score)
                    scores.push(logo.score);
            });
            const avg = scores.reduce((a, b) => a + b, 0) / scores.length;  // Added 0 as initial value for reduce
            console.log(`Average score for ${fileName}: ${avg}`);
        } catch (err: unknown) {  // Explicitly set err type as unknown, added explicit checks on the err object inside the catch block
            if (typeof err === 'object' && err !== null && 'code' in err && err.code === 'ENOENT') {
                console.log(`File ${fileName} not found`);
            } else if (typeof err === 'object' && err !== null && 'message' in err) {
                console.error(`Error processing ${fileName}: ${(err as {message: string}).message}`);
            } else {
                console.error(`An unknown error occurred processing ${fileName}`);
            }
        }
    }
}

mainAsync([
    './images/cmu.jpg', 
    './images/logo-types-collection.jpg', 
    './images/not-a-file.jpg'
]);
