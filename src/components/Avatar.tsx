import type { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
    size?: number;
    loadSize?: number;
    loading?: "lazy"|"eager";
    alt?: string;
}

export default function({
    size = 256,
    loadSize = 256,
    ...props
}: Props): ReactNode {
    return <img src={getAvatarUri(loadSize)} alt="Profile Avatar"
      width={size} height={size}
      {...props}
    />;
}

export function getAvatarUri(size: number): string {
    return `https://1.gravatar.com/avatar/093b64d2016ab8acce8a2fe73cb719f527790d4ecec7f5837db8d46519b38bf8?size=${size}`
}
