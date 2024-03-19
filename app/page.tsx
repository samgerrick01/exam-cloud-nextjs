import { HeaderTitle, TeamSelector } from '@/src/components';
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <div>
      <HeaderTitle data={data} />
      <TeamSelector data={data} />
    </div>
  );
}
