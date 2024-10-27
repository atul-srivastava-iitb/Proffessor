import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import { NextApiRequest } from 'next';

const paths: { [key: string]: string } = {
  lab: 'public/gallery/lab',
};

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url || '');
  const type = searchParams.get('type') || '';
  const targetPath = paths[type];
  if (!targetPath) {
    return NextResponse.json({
      data: 'Not-Found',
      success: false,
    });
  }
  const filePath = path.join(process.cwd(), targetPath);

  try {
    const fileNames = fs.readdirSync(filePath);
    const filteredNames = filterNames(fileNames);
    return NextResponse.json({
      data: filteredNames,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      data: 'Error',
      success: false,
    });
  }
}

const allowedExtensions = ['jpg', 'png'];

function filterNames(names: string[]): string[] {
  if (!Array.isArray(names)) return [];
  const newArray: string[] = [];
  names.forEach((item) => {
    const namesplit = item.split('.');
    const length = namesplit.length;
    const last = namesplit[length - 1] || '';
    if (allowedExtensions.includes(last)) {
      if (!newArray.includes(item)) {
        newArray.push(item);
      }
    }
  });
  return newArray;
}
