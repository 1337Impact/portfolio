import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { experienceLetterName } from '@/lib/data';

export async function GET() {
    const filePath = path.join(process.cwd(), "public", `${experienceLetterName}`);

    try {
        const fileBuffer = fs.readFileSync(filePath);
        const response = new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${experienceLetterName}");"`,
            },
        })

        return response;
    } catch (error) {
        return NextResponse.error();
    }


}