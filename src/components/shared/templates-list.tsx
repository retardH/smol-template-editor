'use client';
import { getTemplatesFromLocalStorage } from '@/lib/utils';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Template } from '@/lib/type-definitions';

const TemplatesList = () => {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    const value = getTemplatesFromLocalStorage();
    if (value) {
      setTemplates(value);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {templates.length > 0 ? (
        templates?.map((template) => {
          return (
            <div
              key={template.title}
              className="rounded-md border border-input p-4 shadow-sm"
            >
              <h4 className="font-medium md:text-lg">{template.title}</h4>
              <p className="text-sm text-slate-500">
                Created at - {new Date(template.createdAt).toLocaleDateString()}
              </p>
              <div className="ml-auto flex max-w-min items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    router.push(`/edit-template/${template.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    router.push(`/fill-data/${template.id}`);
                  }}
                >
                  Fill Data
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center">
          {`Currently, no template was made yet. Please create one first.`}
        </div>
      )}
    </div>
  );
};

export default TemplatesList;
