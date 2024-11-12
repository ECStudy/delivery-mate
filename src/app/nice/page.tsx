'use client';

import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/button/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function AmazingFeedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log({ rating, feedback });

    setRating(0);
    setFeedback('');
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-40">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          너 기가막히다!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button key={star} onClick={() => setRating(star)}>
              <Star
                className={`w-6 h-6 ${
                  star <= rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </Button>
          ))}
        </div>
        <Textarea
          placeholder="무엇이 기가막혔나요? 자세히 알려주세요!"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => {
            setRating(0);
            setFeedback('');
          }}
        >
          초기화
        </Button>
        <Button onClick={handleSubmit} disabled={rating === 0}>
          <Send className="w-4 h-4 mr-2" />
          피드백 보내기
        </Button>
      </CardFooter>
    </Card>
  );
}
