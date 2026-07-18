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
        <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            width={340}
            height={340}
            style={{ borderRadius: '50%', border: '8px solid #719e9f', objectFit: 'cover' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 620 }}>
            <div style={{ fontSize: 30, letterSpacing: 6, textTransform: 'uppercase', color: '#4a626f' }}>
              Tejasri Gururaj
            </div>
            <div style={{ fontSize: 46, color: '#2d4654', marginTop: 14, lineHeight: 1.2 }}>
              Science writer &amp; journalist
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
