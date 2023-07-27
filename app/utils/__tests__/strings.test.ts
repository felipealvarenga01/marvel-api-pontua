import {
    changeUrlToHttps,
    exportToTest,
    maskifyString,
    sanitizeString,
    sanitizeStringToDigits,
} from '../strings';

describe('maskifyString', () => {
    it('get string mask when undefined', () => {
        expect(exportToTest.parseCleaveMaskToString()).toEqual('');
    });

    it('should mask a string using a complex mask with optional characters', () => {
        expect(
            maskifyString('1234abcd5678efgh', {
                blocks: [4, 4, 4, 4],
                delimiters: ['-', '-', '-'],
                numericOnly: false,
            }),
        ).toEqual('1234-abcd-5678-efgh');
        expect(
            maskifyString('89080577', {
                blocks: [5, 3],
                delimiters: ['-'],
                numericOnly: true,
            }),
        ).toEqual('89080-577');
    });

    it('should return non-formatted string if mask is not provided', () => {
        expect(maskifyString('1234abcd5678efgh')).toEqual('1234abcd5678efgh');
    });

    it('should mask a string even if string is smaller than mask', () => {
        expect(
            maskifyString('8908057', {
                blocks: [5, 3],
                delimiters: ['-'],
                numericOnly: true,
            }),
        ).toEqual('89080-57');
    });
});

describe('sanitizeString', () => {
    it('should remove extra spaces from a string', () => {
        expect(sanitizeString('  foo  bar  ')).toEqual('foo bar');
        expect(sanitizeString('foo bar')).toEqual('foo bar');
    });
});

describe('sanitizeStringToDigits', () => {
    it('should remove all non-digit characters from a string', () => {
        expect(sanitizeStringToDigits('1234abcd5678efgh')).toEqual('12345678');
        expect(sanitizeStringToDigits('89080577')).toEqual('89080577');
    });

    it('should return an empty string if the input is undefined', () => {
        expect(sanitizeStringToDigits()).toEqual('');
    });
});

describe('changeUrlToHttps', () => {
    it('should replace "http://" with "https://"', () => {
        const inputUrl = 'http://www.example.com';

        const outputUrl = changeUrlToHttps(inputUrl);

        expect(outputUrl).toEqual('https://www.example.com');
    });

    it('should return the original URL if it does not start with "http://"', () => {
        const inputUrl = 'https://www.example.com';

        const outputUrl = changeUrlToHttps(inputUrl);

        expect(outputUrl).toEqual(inputUrl);
    });
});
