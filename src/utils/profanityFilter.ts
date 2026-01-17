const BAD_WORDS = ['Bitch', 'Bad boy', 'nigger', 'michael', 'coffee'];

const censorWord = (word: string): string => {
  if (word.length <= 1) {
    return word;
  }
  
  if (word.length === 2) {
    return word[0] + '*';
  }
  
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];
  const stars = '*'.repeat(word.length - 2);
  
  return firstLetter + stars + lastLetter;
};

const censorPhrase = (phrase: string): string => {
  return phrase
    .split(/\s+/)
    .map(word => censorWord(word))
    .join(' ');
};

export const filterProfanity = (text: string): string => {
  if (!text) {
    return text;
  }

  let filteredText = text;

  BAD_WORDS.forEach(badWord => {
    const escapedWord = badWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    const isPhrase = badWord.includes(' ');
    
    let regex: RegExp;
    if (isPhrase) {
      regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
    } else {
      regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
    }
    
    filteredText = filteredText.replace(regex, (match) => {
      if (isPhrase) {
        return censorPhrase(match);
      } else {
        return censorWord(match);
      }
    });
  });

  return filteredText;
};
