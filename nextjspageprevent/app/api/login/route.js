import { NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function POST(req) {
  try {
    cookies().set("clientToken", "jewbbhfehebyur4bhsdfhasdasshyy", {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 86400000),
      secure: true,
    });

    return NextResponse.json(
      {
        message: "User Login successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error" + error,
      },
      {
        status: 500,
      }
    );
  }
}
