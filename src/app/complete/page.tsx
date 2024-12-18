'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Check,
  X,
  DollarSign,
  Users,
  Clock,
} from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components';

const partyMembers = [
  {
    id: 1,
    name: '김철수',
    avatar: '/placeholder.svg?height=32&width=32',
    settled: true,
  },
  {
    id: 2,
    name: '이영희',
    avatar: '/placeholder.svg?height=32&width=32',
    settled: true,
  },
  {
    id: 3,
    name: '박민수',
    avatar: '/placeholder.svg?height=32&width=32',
    settled: false,
  },
  {
    id: 4,
    name: '정지은',
    avatar: '/placeholder.svg?height=32&width=32',
    settled: true,
  },
];

export default function CompletedPartyPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettlementOpen, setIsSettlementOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">맛있는 치킨 파티 (완료)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span>{partyMembers.length}명 참여</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} />
                <span>2023년 6월 5일 19:30 주문 완료</span>
              </div>
            </div>

            <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
              <CollapsibleTrigger asChild>
                <Button className="w-full mb-4">
                  주문 상세 내역{' '}
                  {isDetailsOpen ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <p>
                  <strong>음식점:</strong> BBQ 치킨
                </p>
                <p>
                  <strong>주문 메뉴:</strong> 황금올리브 치킨 1, 핫황금올리브
                  치킨 1
                </p>
                <p>
                  <strong>총 주문 금액:</strong> 58,000원
                </p>
                <p>
                  <strong>1인당 금액:</strong> 14,500원
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible
              open={isSettlementOpen}
              onOpenChange={setIsSettlementOpen}
            >
              <CollapsibleTrigger asChild>
                <Button className="w-full mb-4">
                  정산 정보{' '}
                  {isSettlementOpen ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">파티장 계좌 정보</h3>
                  <p>
                    <strong>은행:</strong> OO은행
                  </p>
                  <p>
                    <strong>계좌번호:</strong> 123-456-789012
                  </p>
                  <p>
                    <strong>예금주:</strong> 김철수
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">파티원 정산 현황</h3>
                  <ul className="space-y-2">
                    {partyMembers.map((member) => (
                      <li
                        key={member.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage
                              src={member.avatar}
                              alt={member.name}
                            />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                          <span>{member.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>
                            {member.settled ? '정산 완료' : '정산 대기'}
                          </span>
                          {member.settled ? (
                            <Check className="text-green-500" />
                          ) : (
                            <X className="text-red-500" />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>정산 요약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">총 정산 금액</p>
                <p className="text-3xl font-bold">58,000원</p>
              </div>
              <div>
                <p className="text-lg font-semibold">정산 완료</p>
                <p className="text-3xl font-bold text-green-500">
                  {partyMembers.filter((m) => m.settled).length} /{' '}
                  {partyMembers.length}
                </p>
              </div>
            </div>
            <Button className="w-full mt-4 bg-black text-white">
              <DollarSign className="mr-2" />
              정산 알림 보내기
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
