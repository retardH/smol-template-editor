import { JSONContent } from '@tiptap/react';

export const keysParser = (doc: JSONContent) => {
  const keys: any[] = [];
  doc.content?.forEach((node) => {
    if (node.content) {
      let currentItemText = '';
      for (let i = 0; i < node.content?.length; i++) {
        currentItemText += node.content[i].text;
      }
      if (currentItemText) {
        let openBraceIndex, closeBraceIndex;
        for (let j = 0; j < currentItemText.length; j++) {
          if (currentItemText[j] === '{') {
            openBraceIndex = j;
          }

          if (openBraceIndex !== undefined && currentItemText[j] === '}') {
            closeBraceIndex = j;
            let keyName = currentItemText.substring(
              openBraceIndex + 1,
              closeBraceIndex,
            );
            keys.push(keyName);
            openBraceIndex = closeBraceIndex = undefined;
          }
        }
      }
    }
  });

  return keys;
};
