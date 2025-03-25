'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import addReviews from '@/libs/addReviews';
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] });

export default function AddReview() {
  const { rid } = useParams(); // ดึง restaurant ID จาก URL
  const searchParams = useSearchParams();
  const router = useRouter();

  const restaurantName = searchParams.get('name') || 'Unknown Restaurant';
  const [reviewStar, setReviewStar] = useState(0);
  const [description, setDescription] = useState('');
  const token = 'your-auth-token'; // ต้องเปลี่ยนเป็น token ที่ถูกต้อง

  const handleSubmit = async () => {
    if (!rid || reviewStar <= 0 || description.trim() === '') {
      alert('Please complete all fields');
      return;
    }
    try {
      // await addReviews(rid, token, { reviewStar, description });
      router.push('/review/manage'); // ไปหน้า Manage Review 

    } catch (error) {
      console.error('Failed to add review:', error);
    }
  };

  return (
    <div className='p-6 max-w-lg mx-auto'>
      <h1 className={pattaya.className} style={{ fontSize: "48px" }}>Add Review</h1>
      <p className='text-xl font-bold'>{restaurantName}</p>

      <label className='block mt-4'>Rating (1-5):</label>
      <input
        type='number'
        min='1'
        max='5'
        value={reviewStar}
        onChange={(e) => setReviewStar(Number(e.target.value))}
        className='border p-2 w-full'
      />

      <label className='block mt-4'>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border p-2 w-full'
      ></textarea>

      <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 mt-4'>
        Submit Review
      </button>
    </div>
  );
}
