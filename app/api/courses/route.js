import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Update to use your actual backend URL
    const response = await fetch('https://lin-server.onrender.com/api/courses');
    const data = await response.json();
    
    // Ensure we're returning an array
    const courses = Array.isArray(data) ? data : [];
    
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
} 