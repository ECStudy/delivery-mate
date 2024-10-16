"use client";

import { useState } from 'react'
import { Search, Grid, List, Clock, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation';

const restaurants = [
  { id: 1, name: '롯데리아', type: '양식', image: '/placeholder.svg?height=100&width=100', time: '18:00 - 19:30', date: '6월 3일', participants: 3 },
  { id: 2, name: '김밥천국', type: '한식', image: '/placeholder.svg?height=100&width=100', time: '12:00 - 13:00', date: '6월 3일', participants: 2 },
  { id: 3, name: '스시로', type: '일식', image: '/placeholder.svg?height=100&width=100', time: '19:00 - 20:30', date: '6월 4일', participants: 4 },
  { id: 4, name: '맥도날드', type: '양식', image: '/placeholder.svg?height=100&width=100', time: '18:30 - 19:30', date: '6월 4일', participants: 2 },
  { id: 5, name: '버거킹', type: '양식', image: '/placeholder.svg?height=100&width=100', time: '12:30 - 13:30', date: '6월 5일', participants: 3 },
  { id: 6, name: '피자헛', type: '양식', image: '/placeholder.svg?height=100&width=100', time: '19:00 - 20:00', date: '6월 5일', participants: 5 },
]

export default function MainPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const router = useRouter()

const handleParticipate = (id: number) => {
    router.push(`/list/${id}`)
}

const handleLogin = () => {
  router.push('my')
}

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">딜리버리 메이트</h1>
          <div>
            <Button
                onClick={handleLogin}
            variant="ghost" className="mr-2">로그인</Button>
            <Button>회원가입</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <Input type="text" placeholder="음식점 또는 메뉴 검색" className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex space-x-2">
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')}>
              <Grid size={20} />
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')}>
              <List size={20} />
            </Button>
          </div>
        </div>

        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden">
              <CardHeader className="p-0">
                {/**temp */}
                <div 
                    className="bg-gray-200 h-40 w-full bg-cover bg-center" 
                />
                  
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{restaurant.name}</CardTitle>
                <p className="text-sm text-gray-500">{restaurant.type}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span>{restaurant.time}</span>
                  <span className="mx-2">|</span>
                  <span>{restaurant.date}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <Users size={16} className="mr-1 text-gray-500" />
                  <span className="text-sm text-gray-500">{restaurant.participants} 명 참여</span>
                </div>
                <Button size="sm"
                    onClick={() => handleParticipate(restaurant.id)}
                >참여하기</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}