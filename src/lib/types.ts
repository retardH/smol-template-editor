import { JSONContent } from '@tiptap/react';

export interface Template {
  id: string;
  title: string;
  body: string;
  jsonBody?: JSONContent;
  createdAt: Date | number;
}
