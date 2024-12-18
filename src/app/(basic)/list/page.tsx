'use client';

import { useState } from 'react';
import { Search, Clock, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { fetcher } from '@/lib/fetcher';
import { IParty } from '@/lib/mongo';
import useSWR from 'swr';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@/components';
import { ViewMode } from './components';

export default function ListPage() {
  const { data: parties, isLoading } = useSWR<IParty[]>(
    '/api/party',
    fetcher.get,
  );

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const router = useRouter();

  const handleParticipate = (id: string) => {
    router.push(`/list/${id}`);
  };

  if (isLoading || !parties) return <div>Loading...</div>;

  return (
    <main className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-sm">
          <Input
            type="text"
            placeholder="음식점 또는 메뉴를 검색하세요"
            sizeLevel="custom"
            className="w-full text-sm py-2 pl-10 pr-3"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <ViewMode viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      {parties.length === 0 ? (
        <div className="text-center text-gray-500">등록된 파티가 없습니다.</div>
      ) : (
        <div
          className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}
        >
          {parties.map((party) => (
            <Card key={party._id} className="overflow-hidden">
              <CardHeader className="p-0">
                {/**temp */}
                <div className="bg-gray-200 h-40 w-full bg-cover bg-center" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{party.title}</CardTitle>
                {/* <p className="text-sm text-gray-500">{party.}</p> */}
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  {/* <span>{party}</span> */}
                  <span className="mx-2">|</span>
                  <span>{party.limitTime}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <Users size={16} className="mr-1 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {party.member.length} 명 참여
                  </span>
                </div>
                <Button
                  bg_color="black"
                  sizeLevel="small"
                  onClick={() => handleParticipate(party._id)}
                >
                  참여하기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
