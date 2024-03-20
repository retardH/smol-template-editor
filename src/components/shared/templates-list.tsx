'use client';
import { getTemplatesFromLocalStorage } from '@/lib/utils';

const TemplatesList = () => {
  const templates = getTemplatesFromLocalStorage();
  return (
    <div className="flex flex-col gap-4">
      {templates ? (
        <div></div>
      ) : (
        <div className="text-center">
          {`Currently, no template was made yet. Please create one first.`}
        </div>
      )}
    </div>
  );
};

export default TemplatesList;
