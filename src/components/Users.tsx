'use client';

import { generateUsers } from '@/lib/data';
import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { Avatar, AvatarBorderVariants, AvatarVariants } from './ui/avatar';

export function Users() {
  const [size, setSize] = useState<AvatarVariants['size']>('default');
  const [border, setBorder] =
    useState<AvatarBorderVariants['border']>('default');

  const users = generateUsers(50);

  return (
    <div className='w-full'>
      <Dashboard setSize={setSize} setBorder={setBorder} />

      <div className='flex flex-wrap [&>div]:-ml-3 ml-3 space-x-0 [&>div]:mt-3 -mt-3 '>
        {users.map(({ userName, imgUrl, fallbackText }) => {
          return (
            <Avatar
              key={userName}
              imgUrl={imgUrl}
              userName={userName}
              fallbackText={fallbackText}
              size={size}
              border={border}
            />
          );
        })}
      </div>
    </div>
  );
}
