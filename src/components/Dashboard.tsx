import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

import { AvatarBorderVariants, AvatarVariants } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type DashboardProps = {
  setSize: Dispatch<SetStateAction<AvatarVariants['size']>>;
  setBorder: Dispatch<SetStateAction<AvatarBorderVariants['border']>>;
};

export function Dashboard({ setSize, setBorder }: DashboardProps) {
  return (
    <div className='bg-gradient-to-r from-violet-700 to-indigo-700 text-white rounded-md p-6 mb-10 flex items-center justify-center flex-col gap-6'>
      <div className='flex items-center justify-center gap-4 flex-wrap text-xl'>
        <h1>created by </h1>
        <Link
          href={'https://github.com/jessicasantosb'}
          target='_blank'
          className='underline underline-offset-4 hover:text-violet-100'
        >
          Jessica Bandeira
        </Link>
      </div>

      <div className='flex items-center justify-center flex-wrap gap-4'>
        <Select
          onValueChange={(size) => setSize(size as AvatarVariants['size'])}
        >
          <SelectTrigger className='w-48'>
            <SelectValue placeholder='Size' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='default'>Default</SelectItem>
            <SelectItem value='sm'>Small</SelectItem>
            <SelectItem value='lg'>Large</SelectItem>
            <SelectItem value='xl'>Extra Large</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(border) =>
            setBorder(border as AvatarBorderVariants['border'])
          }
        >
          <SelectTrigger className='w-48'>
            <SelectValue placeholder='Border' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='default'>Default</SelectItem>
            <SelectItem value='none'>None</SelectItem>
            <SelectItem value='blue'>Blue</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
