"use client"

import { useState } from 'react'
import { Camera, Edit,  ClipboardList, MessageSquare, HelpCircle, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyPage() {
  const [nickname, setNickname] = useState('배달의 고수')
  const [email, setEmail] = useState('delivery.master@example.com')
  const [phone, setPhone] = useState('010-1234-5678')

  const totalDeliveries = 42
  const userLevel = 'Gold'
  const progressToNextLevel = 80

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">마이페이지</h1>

        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">프로필</TabsTrigger>
            <TabsTrigger value="stats">통계 및 활동</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>프로필 정보</CardTitle>
                <CardDescription>개인정보를 관리하고 수정할 수 있습니다.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg" alt={nickname} />
                    <AvatarFallback>{nickname[0]}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">
                    <Camera className="mr-2 h-4 w-4" /> 프로필 사진 변경
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nickname">닉네임</Label>
                  <div className="flex space-x-2">
                    <Input id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> 변경</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">전화번호</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </CardContent>
              <CardFooter>
                <Button>개인정보 수정 저장</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>배달 통계</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>총 배달 횟수</span>
                    <span className="text-2xl font-bold">{totalDeliveries}회</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>현재 등급</span>
                      <span className="font-semibold text-yellow-600">{userLevel}</span>
                    </div>
                    <Progress value={progressToNextLevel} className="w-full" />
                    <p className="text-sm text-gray-500">다음 등급까지 {100 - progressToNextLevel}% 남았습니다</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>활동</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center">
                      <ClipboardList className="mr-2 h-4 w-4" />
                      나의 주문내역
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      피드백 / 버그 제보
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      사용법 안내
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}