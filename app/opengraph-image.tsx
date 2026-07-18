import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Tejasri Gururaj — science writer and journalist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const avatarData = readFileSync(join(process.cwd(), 'public/assets/avatar-tejasri.jpg'));
  const avatarSrc = `data:image/jpeg;base64,${avatarData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#b8c4bb',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          width={460}
          height={460}
          style={{ borderRadius: '50%', border: '10px solid #719e9f', objectFit: 'cover' }}
        />
      </div>
    ),
    { ...size }
  );
}
