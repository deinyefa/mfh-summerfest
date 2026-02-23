import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const formName = formData["form-name"] || "unknown-form"

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyqTKTIia2opqCU9zNTC2CVuDjwCHaZyP6-X8wXDEsDfdyLSB_Q_gc2G0hDBSaR1aXQoA/exec?token=LfT!d*w9caWje2NhM-m8MAdJ"

    const payload = {
      form_name: formName,
      data: formData
    }

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      console.error("Failed to proxy submission to Google Apps Script")
      return NextResponse.json({ error: "Failed to submit form. Please try again later." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Submit error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
