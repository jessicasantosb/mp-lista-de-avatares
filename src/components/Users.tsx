import { generateUsers } from '@/lib/data';
import { Avatar } from './ui/avatar';

export function Users() {
  const users = generateUsers(50);

  return (
    <div className='w-full flex flex-wrap [&>div]:-ml-3 ml-3 space-x-0 [&>div]:mt-3 -mt-3 '>
      {users.map(({ userName, imgUrl, fallbackText }) => {
        return (
          <Avatar
            key={userName}
            imgUrl={imgUrl}
            userName={userName}
            fallbackText={fallbackText}
          />
        );
      })}
    </div>
  );
}
