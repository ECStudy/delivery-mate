'use client';

import { useState } from 'react';
import { Clock, Users, MapPin, ChevronRight } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
} from '@/components';

const partyMembers = [
  { id: 1, name: '김철수', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 2, name: '이영희', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 3, name: '박민수', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 4, name: '정지은', avatar: '/placeholder.svg?height=32&width=32' },
];

const otherRooms = [
  {
    id: 1,
    name: '치킨 파티',
    restaurant: '교촌치킨',
    members: 3,
    timeLeft: '30분',
  },
  {
    id: 2,
    name: '피자 나라',
    restaurant: '도미노피자',
    members: 2,
    timeLeft: '45분',
  },
  {
    id: 3,
    name: '분식 모임',
    restaurant: '엽기떡볶이',
    members: 4,
    timeLeft: '15분',
  },
];

export default function PartyDetailPage() {
  const [remainingTime, setRemainingTime] = useState(45); // 남은 시간 (분)

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* 파티 정보 섹션 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">맛있는 치킨 파티</h1>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Clock size={16} className="mr-1" />
                <span>주문 마감까지 {remainingTime}분 남음</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={16} className="mr-1" />
                <span>배달 장소: 서울시 강남구 테헤란로 123</span>
              </div>
            </div>
            <Button>채팅방 입장</Button>
          </div>
          <Progress value={75} className="mb-4 h-2 bg-gray-200" />
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {partyMembers.map((member) => (
                <Avatar key={member.id} className="border-2 border-white">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <Users size={16} className="inline mr-1" />
              <span>{partyMembers.length}명 참여 중</span>
            </div>
          </div>
        </section>

        {/* 배달 상세 내용 섹션 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start">
            <div className="bg-gray-200 h-24 w-24 bg-cover bg-center rounded-lg mr-4" />
            <div>
              <h2 className="text-xl font-semibold mb-2">BBQ 치킨</h2>
              <p className="text-gray-600 mb-4">
                맛있고 건강한 치킨, 오늘의 특별 할인!
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium mr-2">주문 예정 메뉴:</span>
                  <span>황금올리브 치킨 1, 핫황금올리브 치킨 1</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium mr-2">예상 총 주문 금액:</span>
                  <span>58,000원</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium mr-2">1인당 예상 금액:</span>
                  <span>14,500원</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">참고사항</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>치킨 양념은 일반 맛으로 주문합니다.</li>
              <li>콜라 1.25L 1병이 기본으로 제공됩니다.</li>
              <li>추가 주문 시 별도로 알려주세요.</li>
            </ul>
          </div>
        </section>

        {/* 다른 방 목록 섹션 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">다른 배달 파티</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherRooms.map((room) => (
              <Card key={room.id} className="bg-white">
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{room.restaurant}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={16} className="mr-1" />
                      <span>{room.members}명</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      <span>{room.timeLeft} 남음</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    상세보기
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
