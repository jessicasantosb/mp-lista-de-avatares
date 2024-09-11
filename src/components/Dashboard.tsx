import { AvatarBorderVariants, AvatarVariants } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Dashboard({ setSize, setBorder }: any) {
  return (
    <div className='bg-gradient-to-r from-violet-700 to-indigo-700 text-white rounded-md p-4 mb-10 flex items-center justify-center flex-col gap-10'>
      <h1>
        created by{' '}
        <Link href={'https://github.com/jessicasantosb'} target='_blank'>
          Jessica Bandeira
        </Link>
      </h1>

      <div className='flex items-center gap-4'>
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
