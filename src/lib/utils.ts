import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Template } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTemplatesFromLocalStorage() {
  const templatesString = localStorage.getItem('templates');
  if (templatesString) {
    return JSON.parse(templatesString) as Template[];
  }
  return null;
}

export function getTemplateFromLocalStorageById(id: string) {
  const templates = getTemplatesFromLocalStorage();
  if (templates) {
    return templates.find((template) => template.id === id);
  }
  return null;
}

export function saveTemplateToLocalStorage(template: Template) {
  const templates = localStorage.getItem('templates');
  if (templates) {
    const newTemplates = JSON.parse(templates);
    newTemplates.push(template);
    localStorage.setItem('templates', JSON.stringify(newTemplates));
    return;
  }
  localStorage.setItem('templates', JSON.stringify([template]));
}

export function updateTemplateDataToLocalStorage(
  id: string,
  updatedTemplate: Template,
) {
  const templates = getTemplatesFromLocalStorage();
  if (templates) {
    const newTemplates = templates.map((template) => {
      if (template.id === id) {
        return updatedTemplate;
      }
      return template;
    });
    localStorage.setItem('templates', JSON.stringify(newTemplates));
  }
}
