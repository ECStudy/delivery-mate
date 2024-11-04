import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/ui/header';
import { Utensils, Users, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            함께 주문하고, 함께 즐기세요!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            딜리버리 메이트와 함께라면 점심, 저녁 시간이 더욱 즐거워집니다.
          </p>
          <Link href="/login" passHref>
            <Button className="bg-black text-white" size="lg">
              지금 시작하기
            </Button>
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Utensils className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>다양한 메뉴</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                다양한 레스토랑과 메뉴를 한 곳에서 쉽게 찾아보세요.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>함께하는 즐거움</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                동료들과 함께 주문하고 비용을 나눠 부담하세요.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-yellow-500 mb-2" />
              <CardTitle>시간 절약</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                주문과 결제를 한 번에 처리하여 귀중한 시간을 절약하세요.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-red-500 mb-2" />
              <CardTitle>특별한 혜택</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                주문 횟수에 따른 등급 상승과 다양한 혜택을 누리세요.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            지금 바로 시작하세요!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            맛있는 음식과 즐거운 경험이 여러분을 기다리고 있습니다.
          </p>
          <Link href="/login" passHref>
            <Button size="lg" variant="outline">
              회원가입 하기
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2024 딜리버리 메이트. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
