'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { keysParser } from '@/lib/keys-parser';
import { getTemplateFromLocalStorageById } from '@/lib/utils';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const FillDataPage: NextPage<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const templateData = getTemplateFromLocalStorageById(params.id);
  const keys = keysParser(templateData?.jsonBody!);
  return (
    <div>
      {keys.length > 0 ? (
        <form className="flex flex-col gap-4">
          {keys.map((key) => {
            return (
              <div key={key} className="flex flex-col gap-2">
                <label className="capitalize">{key}</label>
                <Input name={key} required placeholder="Please Enter" />
              </div>
            );
          })}
          <Button>Submit</Button>
        </form>
      ) : (
        <div className="my-4 text-center">
          <p className="mb-2">No Dynamic Keys Provided For This Template</p>
          <Button
            onClick={() => {
              router.back();
            }}
          >
            Back To Home
          </Button>
        </div>
      )}
    </div>
  );
};

export default FillDataPage;
