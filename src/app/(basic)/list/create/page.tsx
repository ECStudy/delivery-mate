'use client';

import { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { NewParty } from '@/lib/validator/party';
import { createParty } from '@/lib/party/create-party';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components';

type StatusTypes = 'progress' | 'complete' | 'cancel';

export default function CreatePartyPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [maxMember, setMaxMember] = useState(2);
  const [limitTime, setLimitTime] = useState(30);
  const [status, setStatus] = useState<StatusTypes>('progress');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newParty: Omit<NewParty, 'member'> = {
      title,
      description,
      thumbnail,
      tags,
      maxMember,
      limitTime,
      startDate,
      endDate,
    };

    await createParty(newParty);

    // Here you would typically send this data to your backend
    router.push('/main');
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 w-full">
      <div className="max-w-2xl mx-auto bg-white">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">새로운 파티 만들기</CardTitle>
            <CardDescription>
              함께 맛있는 식사를 즐길 파티원을 모집해보세요!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">파티 제목</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">파티 설명</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="thumbnail">썸네일 URL</Label>
                <Input
                  id="thumbnail"
                  type="url"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">태그</Label>
                <div className="flex space-x-2">
                  <Input
                    id="tags"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="새 태그 추가"
                  />
                  <Button type="button" onClick={addTag}>
                    추가
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-blue-800 hover:text-blue-900"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxMember">최대 인원</Label>
                <Input
                  id="maxMember"
                  type="number"
                  min="2"
                  value={maxMember}
                  onChange={(e) => setMaxMember(Number(e.target.value))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="limitTime">제한 시간 (분)</Label>
                <Input
                  id="limitTime"
                  type="number"
                  min="1"
                  value={limitTime}
                  onChange={(e) => setLimitTime(Number(e.target.value))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">상태</Label>
                <Select
                  value={status}
                  onValueChange={(value: StatusTypes) => setStatus(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="상태 선택" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="progress">진행 중</SelectItem>
                    <SelectItem value="complete">완료</SelectItem>
                    <SelectItem value="cancel">취소</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">시작 날짜</Label>
                <Input
                  id="startDate"
                  type="datetime-local"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">종료 날짜</Label>
                <Input
                  id="endDate"
                  type="datetime-local"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => router.push('/main')}>취소</Button>
            <Button className="flex items-center border" onClick={handleSubmit}>
              <PlusCircle className="mr-2 h-4 w-4" /> 파티 만들기
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
