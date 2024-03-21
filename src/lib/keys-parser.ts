import { JSONContent } from '@tiptap/react';

export const keysParser = (doc: JSONContent) => {
  const keys: any[] = [];
  doc.content?.forEach((node) => {
    if (node.content) {
      for (let i = 0; i < node.content?.length; i++) {
        const currentItemText = node.content[i].text;
        let openBraceIndex = currentItemText?.indexOf('{');
        let closeBraceIndex;
        if (openBraceIndex === undefined || openBraceIndex === -1) {
          continue;
        }
        closeBraceIndex = currentItemText?.indexOf('}');
        console.log(currentItemText, openBraceIndex, closeBraceIndex);
        if (closeBraceIndex) {
          let keyName = currentItemText?.substring(
            openBraceIndex + 1,
            closeBraceIndex,
          );
          keys.push(keyName);
        }
      }
    }
  });

  return keys;
};
