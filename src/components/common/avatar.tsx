import cn from 'classnames';
import { Image } from '@components/ui/image';
import { useState, useEffect } from 'react';

type AvatarProps = {
  className?: string;
  src: string;
  title: string;
  [key: string]: unknown;
};

const Avatar: React.FC<AvatarProps> = ({ src, className, title, ...rest }) => {
  const [name, setUserName] = useState('');

  useEffect(() => {
    // Set the user's first name based on the title prop
    if (title) {
      setUserName(title.split(" ")[0]);
    }
  }, [title]);

  return (
    <div className="flex flex-col items-center">
      <span
        className={cn(
          'relative block cursor-pointer overflow-hidden rounded-full border border-border-100',
          className
        )}
        {...rest}
      >
        <Image
          alt={title}
          src={src}
          fill
          sizes="(max-width: 768px) 100vw"
          priority={true}
        />
      </span>
      <div className="mt-1 text-xs font-bold text-gray-600 font-sans">
        Hi, {name}
      </div>
    </div>
  );
};

export default Avatar;
