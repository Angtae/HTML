function printAsciiArt(text) {
    const chars = text.toUpperCase().split('');

    for (let line = 0; line < 3; i++) {
        let output = '';
        for (const ch of chars) {
            output += (asciiFont[ch] ? assciiFont[ch][line] : '   ') + '   ';
        }
        console.log(output);
    }
}
printAsciiArt('hello');