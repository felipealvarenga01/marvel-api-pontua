import type { CleaveOptions } from 'cleave.js/options';

export function sanitizeString(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}

function parseCleaveMaskToString(mask?: CleaveOptions) {
  if (!mask || !mask.blocks) {
    return '';
  }

  const maskChar = mask.numericOnly ? '9' : '*';
  let parsedMask = '';

  for (let i = 0; i < mask.blocks.length; i++) {
    parsedMask += maskChar.repeat(mask.blocks[i]);

    if (mask.delimiters && mask.delimiters[i]) {
      parsedMask += mask.delimiters[i];
    }
  }

  return parsedMask;
}

export function maskifyString(value: string, cleaveMask?: CleaveOptions) {
  if (!cleaveMask) {
    return value;
  }

  const mask = parseCleaveMaskToString(cleaveMask);

  let indexValue = 0;
  let formattedValue = '';

  // Iterate mask
  for (const char of mask) {
    // Check if mask current character is a special character
    if (
        (cleaveMask.numericOnly && char === '9') ||
        (!cleaveMask.numericOnly && char === '*')
    ) {
      // Verify if there is a character in the value to be formatted
      if (indexValue < value.length) {
        // Add next character to the formatted value
        formattedValue += value[indexValue];
        indexValue++;
      } else {
        // There's no more characters to be formatted
        break;
      }
    } else {
      // Add mask character to the formatted value
      formattedValue += char;
    }
  }

  return formattedValue;
}

export function changeUrlToHttps(url: string) {
  return url.replace('http://', 'https://');
}

export const exportToTest = { parseCleaveMaskToString };

export const sanitizeStringToDigits = (value?: string) => {
  return value?.replace(/\D/g, '') || '';
};
